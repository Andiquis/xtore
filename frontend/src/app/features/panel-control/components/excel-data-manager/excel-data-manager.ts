import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertCircle, CheckCircle2, FileDown, FileUp, LucideAngularModule, Plus, X } from 'lucide-angular';
import * as XLSX from 'xlsx';

export type ExcelImportAction = 'insert' | 'update' | 'replace' | 'skip';
export type ExcelImportStatus = 'new' | 'duplicate' | 'invalid';

export interface ExcelColumnConfig {
  key: string;
  header: string;
  aliases?: string[];
  required?: boolean;
  editable?: boolean;
  defaultValue?: string;
  exampleValue?: string;
  maxLength?: number;
  exportValue?: (record: unknown) => unknown;
  transform?: (value: unknown) => unknown;
  validate?: (value: unknown, row: Record<string, unknown>) => string | null;
}

export interface ExcelDataConfig {
  entityLabel: string;
  fileName: string;
  sheetName: string;
  uniqueKey: string;
  uniqueLabel: string;
  uniqueValue?: (value: Record<string, unknown> | unknown) => unknown;
  columns: ExcelColumnConfig[];
}

export interface ExcelReviewRow {
  rowNumber: number;
  data: Record<string, unknown>;
  status: ExcelImportStatus;
  action: ExcelImportAction;
  errors: string[];
  existingRecord: unknown | null;
  isEditing: boolean;
}

export interface ExcelImportCommit {
  rows: ExcelReviewRow[];
  inserts: ExcelReviewRow[];
  updates: ExcelReviewRow[];
  replaces: ExcelReviewRow[];
  skipped: ExcelReviewRow[];
}

@Component({
  selector: 'app-excel-data-manager',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './excel-data-manager.html',
  styleUrl: './excel-data-manager.scss',
})
export class ExcelDataManager {
  UploadIcon = FileUp;
  DownloadIcon = FileDown;
  FileIcon = FileUp;
  CloseIcon = X;
  AlertIcon = AlertCircle;
  SuccessIcon = CheckCircle2;
  PlusIcon = Plus;

  @Input({ required: true }) config!: ExcelDataConfig;
  @Input() records: readonly unknown[] = [];
  @Output() commitImport = new EventEmitter<ExcelImportCommit>();

  readonly isOpen = signal(false);
  readonly fileName = signal('');
  readonly reviewRows = signal<ExcelReviewRow[]>([]);
  readonly errorMessage = signal<string | null>(null);

  openImport(): void {
    this.errorMessage.set(null);
    this.fileName.set('');
    this.reviewRows.set([]);
    this.isOpen.set(true);
  }

  close(): void {
    this.isOpen.set(false);
  }

  exportData(): void {
    const rows = this.records.map((record) => {
      const output: Record<string, unknown> = {};

      this.config.columns.forEach((column) => {
        output[column.header] = column.exportValue
          ? column.exportValue(record)
          : this.readValue(record, column.key);
      });

      return output;
    });

    const worksheet = XLSX.utils.json_to_sheet(rows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, this.config.sheetName || 'Datos');
    XLSX.writeFile(workbook, `${this.config.fileName || 'datos'}.xlsx`);
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    input.value = '';

    if (!file) {
      return;
    }

    if (!/\.(xlsx|xls)$/i.test(file.name)) {
      this.errorMessage.set('Selecciona un archivo Excel con extensión .xlsx o .xls.');
      return;
    }

    this.fileName.set(file.name);
    this.errorMessage.set(null);

    const reader = new FileReader();
    reader.onload = () => this.parseWorkbook(reader.result);
    reader.onerror = () => this.errorMessage.set('No se pudo leer el archivo seleccionado.');
    reader.readAsArrayBuffer(file);
  }

  updateCell(row: ExcelReviewRow, column: ExcelColumnConfig, value: string): void {
    row.data[column.key] = column.transform ? column.transform(value) : value.trim();
    this.revalidateRow(row);
    this.reviewRows.set([...this.reviewRows()]);
  }

  addManualRow(): void {
    const data = this.config.columns.reduce<Record<string, unknown>>((row, column) => {
      row[column.key] = column.defaultValue ?? '';
      return row;
    }, {});
    const row = this.buildReviewRow(data, this.getNextRowNumber(), true);

    this.reviewRows.set([...this.reviewRows(), row]);
    this.errorMessage.set(null);
  }

  isEditableCell(row: ExcelReviewRow, column: ExcelColumnConfig): boolean {
    return row.isEditing && (column.editable ?? true);
  }

  setAction(row: ExcelReviewRow, action: ExcelImportAction): void {
    row.action = action;
    this.reviewRows.set([...this.reviewRows()]);
  }

  commit(): void {
    const activeInvalid = this.reviewRows().filter((row) => row.status === 'invalid' && row.action !== 'skip');

    if (activeInvalid.length) {
      this.errorMessage.set('Completa u omite las filas con observaciones antes de importar.');
      return;
    }

    const rows = this.reviewRows();
    this.commitImport.emit({
      rows,
      inserts: rows.filter((row) => row.action === 'insert'),
      updates: rows.filter((row) => row.action === 'update'),
      replaces: rows.filter((row) => row.action === 'replace'),
      skipped: rows.filter((row) => row.action === 'skip'),
    });
    this.close();
  }

  get validActionCount(): number {
    return this.reviewRows().filter((row) => row.action !== 'skip' && row.status !== 'invalid').length;
  }

  get skippedCount(): number {
    return this.reviewRows().filter((row) => row.action === 'skip').length;
  }

  get invalidCount(): number {
    return this.reviewRows().filter((row) => row.status === 'invalid' && row.action !== 'skip').length;
  }

  get exampleRow(): Record<string, string> {
    return this.config.columns.reduce<Record<string, string>>((row, column) => {
      row[column.key] = column.exampleValue ?? column.defaultValue ?? (column.required ? 'Ejemplo' : '');
      return row;
    }, {});
  }

  private parseWorkbook(result: string | ArrayBuffer | null): void {
    if (!result) {
      this.errorMessage.set('El archivo está vacío o no se pudo procesar.');
      return;
    }

    try {
      const workbook = XLSX.read(result, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const rows = XLSX.utils.sheet_to_json<Record<string, unknown>>(sheet, { defval: '', raw: false });

      if (!rows.length) {
        this.errorMessage.set('La hoja de Excel no contiene filas para importar.');
        return;
      }

      this.reviewRows.set(this.buildReviewRows(rows));
    } catch {
      this.errorMessage.set('No se pudo analizar el Excel. Revisa que el archivo no esté dañado.');
    }
  }

  private buildReviewRows(rows: Record<string, unknown>[]): ExcelReviewRow[] {
    const existingByKey = this.getExistingRecordMap();
    const seenInFile = new Set<string>();

    return rows.map((rawRow, index) => {
      const data = this.mapRow(rawRow);
      const row = this.buildReviewRow(data, index + 2, false, existingByKey);
      const uniqueValue = this.getUniqueComparable(data);

      if (uniqueValue && seenInFile.has(uniqueValue)) {
        row.errors.push(`${this.config.uniqueLabel} duplicado dentro del archivo.`);
        row.status = 'invalid';
        row.action = 'skip';
        row.isEditing = true;
      }

      if (uniqueValue) {
        seenInFile.add(uniqueValue);
      }

      return row;
    });
  }

  private buildReviewRow(
    data: Record<string, unknown>,
    rowNumber: number,
    forceEditing: boolean,
    existingByKey = this.getExistingRecordMap(),
  ): ExcelReviewRow {
    const uniqueValue = this.getUniqueComparable(data);
    const existingRecord = uniqueValue ? existingByKey.get(uniqueValue) ?? null : null;
    const errors = this.validateRow(data);
    const status: ExcelImportStatus = errors.length ? 'invalid' : existingRecord ? 'duplicate' : 'new';
    const action: ExcelImportAction = status === 'invalid' ? 'skip' : status === 'duplicate' ? 'skip' : 'insert';

    return {
      rowNumber,
      data,
      status,
      action,
      errors,
      existingRecord,
      isEditing: forceEditing || status === 'invalid',
    };
  }

  private mapRow(rawRow: Record<string, unknown>): Record<string, unknown> {
    const normalizedRow = new Map<string, unknown>();

    Object.entries(rawRow).forEach(([key, value]) => {
      normalizedRow.set(this.normalizeHeader(key), value);
    });

    return this.config.columns.reduce<Record<string, unknown>>((data, column) => {
      const possibleHeaders = [column.header, column.key, ...(column.aliases ?? [])];
      const value = possibleHeaders
        .map((header) => normalizedRow.get(this.normalizeHeader(header)))
        .find((candidate) => candidate !== undefined);
      const fallback = column.defaultValue ?? '';
      const rawValue = value === undefined || value === null || value === '' ? fallback : value;

      data[column.key] = column.transform ? column.transform(rawValue) : String(rawValue).trim();
      return data;
    }, {});
  }

  private getExistingRecordMap(): Map<string, unknown> {
    const existingByKey = new Map<string, unknown>();

    this.records.forEach((record) => {
      const value = this.getUniqueComparable(record);
      if (value) {
        existingByKey.set(value, record);
      }
    });

    return existingByKey;
  }

  private getNextRowNumber(): number {
    const rowNumbers = this.reviewRows().map((row) => row.rowNumber);
    return rowNumbers.length ? Math.max(...rowNumbers) + 1 : 2;
  }

  private revalidateRow(row: ExcelReviewRow): void {
    const uniqueValue = this.getUniqueComparable(row.data);
    row.existingRecord = uniqueValue ? this.getExistingRecordMap().get(uniqueValue) ?? null : null;
    row.errors = this.validateRow(row.data);
    row.status = row.errors.length ? 'invalid' : row.existingRecord ? 'duplicate' : 'new';

    if (!row.errors.length && row.action === 'skip' && !row.existingRecord) {
      row.action = 'insert';
    }
  }

  private validateRow(data: Record<string, unknown>): string[] {
    const errors: string[] = [];

    this.config.columns.forEach((column) => {
      const value = data[column.key];
      const stringValue = String(value ?? '').trim();

      if (column.required && !stringValue) {
        errors.push(`${column.header} es obligatorio.`);
      }

      if (column.maxLength && stringValue.length > column.maxLength) {
        errors.push(`${column.header} no debe superar ${column.maxLength} caracteres.`);
      }

      const customError = column.validate?.(value, data);
      if (customError) {
        errors.push(customError);
      }
    });

    return errors;
  }

  private normalizeHeader(value: string): string {
    return this.normalizeComparable(value).replace(/[^a-z0-9]/g, '');
  }

  private getUniqueComparable(value: Record<string, unknown> | unknown): string {
    if (this.config.uniqueValue) {
      return this.normalizeComparable(this.config.uniqueValue(value));
    }

    if (value && typeof value === 'object') {
      return this.normalizeComparable((value as Record<string, unknown>)[this.config.uniqueKey]);
    }

    return this.normalizeComparable(this.readValue(value, this.config.uniqueKey));
  }

  private normalizeComparable(value: unknown): string {
    return String(value ?? '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim();
  }

  private readValue(record: unknown, key: string): unknown {
    if (!record || typeof record !== 'object') {
      return '';
    }

    return (record as Record<string, unknown>)[key] ?? '';
  }
}
