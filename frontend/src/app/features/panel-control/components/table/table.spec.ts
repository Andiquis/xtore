import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Table, TableCellTemplate, TableColumn, TableRowEvent } from './table';

interface TestItem {
  id: string;
  name: string;
  status: string;
}

@Component({
  standalone: true,
  imports: [Table, TableCellTemplate],
  template: `
    <app-table
      title="Usuarios"
      [items]="items"
      [columns]="columns"
      [(selectedItems)]="selectedItems"
      [(activeItem)]="activeItem"
      [selectable]="true"
      keyField="id"
      (rowClick)="onRowClick($event)"
    >
      <ng-template appTableCell="status" let-item>
        <span class="custom-status">{{ item.status }}</span>
      </ng-template>
    </app-table>
  `,
})
class HostComponent {
  items: TestItem[] = [
    { id: '1', name: 'Ana', status: 'Activo' },
    { id: '2', name: 'Luis', status: 'Inactivo' },
    { id: '3', name: 'Marta', status: 'Activo' },
  ];

  columns: TableColumn<TestItem>[] = [
    { key: 'name', label: 'Nombre' },
    { key: 'status', label: 'Estado' },
  ];

  selectedItems: TestItem[] = [];
  activeItem: TestItem | null = null;
  rowClickEvent: TableRowEvent<TestItem> | null = null;

  onRowClick(event: TableRowEvent<TestItem>): void {
    this.rowClickEvent = event;
  }
}

describe('Table', () => {
  let fixture: ComponentFixture<HostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
  });

  it('renders configured columns and custom cell templates', () => {
    const element: HTMLElement = fixture.nativeElement;

    expect(element.textContent).toContain('Usuarios');
    expect(element.textContent).toContain('Nombre');
    expect(element.textContent).toContain('Ana');
    expect(element.querySelector('.custom-status')?.textContent?.trim()).toBe('Activo');
  });

  it('emits rowClick and updates activeItem when a row is clicked', () => {
    const rows = fixture.nativeElement.querySelectorAll('tbody .table-row') as NodeListOf<HTMLTableRowElement>;

    rows[1].click();
    fixture.detectChanges();

    expect(fixture.componentInstance.activeItem?.id).toBe('2');
    expect(fixture.componentInstance.rowClickEvent?.item).toEqual(fixture.componentInstance.items[1]);
    expect(fixture.componentInstance.rowClickEvent?.index).toBe(1);
    expect(rows[1].classList.contains('active')).toBe(true);
  });

  it('supports two-way selectedItems binding from row checkboxes', () => {
    const checkboxes = fixture.nativeElement.querySelectorAll('tbody input[type="checkbox"]') as NodeListOf<HTMLInputElement>;

    checkboxes[0].checked = true;
    checkboxes[0].dispatchEvent(new Event('change', { bubbles: true }));
    fixture.detectChanges();

    expect(fixture.componentInstance.selectedItems).toEqual([fixture.componentInstance.items[0]]);
  });

  it('toggles selection when the checkbox cell is clicked', () => {
    const cells = fixture.nativeElement.querySelectorAll('tbody .col-check') as NodeListOf<HTMLTableCellElement>;

    cells[1].click();
    fixture.detectChanges();

    expect(fixture.componentInstance.selectedItems).toEqual([fixture.componentInstance.items[1]]);
  });

  it('extends checkbox selection with Shift + ArrowDown', () => {
    const checkboxes = fixture.nativeElement.querySelectorAll('tbody input[type="checkbox"]') as NodeListOf<HTMLInputElement>;

    checkboxes[0].checked = true;
    checkboxes[0].dispatchEvent(new Event('change', { bubbles: true }));
    fixture.detectChanges();

    checkboxes[0].dispatchEvent(new KeyboardEvent('keydown', {
      key: 'ArrowDown',
      shiftKey: true,
      bubbles: true,
    }));
    fixture.detectChanges();

    expect(fixture.componentInstance.selectedItems).toEqual([
      fixture.componentInstance.items[0],
      fixture.componentInstance.items[1],
    ]);
  });
});
