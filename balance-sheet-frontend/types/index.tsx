export interface Attribute {
  Value: string;
  Id: string;
}

export interface Cell {
  Value: string;
  Attributes?: Attribute[];
}

export interface Row {
  RowType: string;
  Title?: string;
  Cells?: Cell[];
  Rows?: Row[];
}

export interface Report {
  ReportID: string;
  ReportName: string;
  ReportType: string;
  ReportTitles: string[];
  ReportDate: string;
  UpdatedDateUTC: string;
  Fields: any[];
  Rows: Row[];
}

export interface ReportData {
  Status: string;
  Reports: Report[];
}