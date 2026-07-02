declare module 'xlsx' {
  export const utils: {
    json_to_sheet(rows: Record<string, unknown>[]): unknown;
    book_new(): unknown;
    book_append_sheet(workbook: unknown, worksheet: unknown, sheetName: string): void;
    sheet_to_json<T = Record<string, unknown>>(worksheet: unknown, options?: Record<string, unknown>): T[];
  };

  export function read(data: unknown, options?: Record<string, unknown>): {
    SheetNames: string[];
    Sheets: Record<string, unknown>;
  };

  export function writeFile(workbook: unknown, fileName: string): void;
}
