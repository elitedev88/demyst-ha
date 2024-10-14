import React from "react";
import { render, screen } from "@testing-library/react";
import ReportTable from "./ReportTable";
import { Report } from "@/types";

const mockReport: Report = {
  ReportID: "BalanceSheet",
  ReportName: "Balance Sheet",
  ReportType: "BalanceSheet",
  ReportTitles: ["Balance Sheet", "Demo Org", "As at 11 Oct 2024"],
  ReportDate: "11 Oct 2024",
  UpdatedDateUTC: "/Date(1728604800000)/",
  Fields: [],
  Rows: [
    {
      RowType: "Header",
      Cells: [
        { Value: "" },
        { Value: "11 Oct 2024" },
        { Value: "14 Oct 2023" },
      ],
    },
    {
      RowType: "Section",
      Title: "Assets",
      Rows: [
        {
          RowType: "Row",
          Cells: [
            { Value: "My Account" },
            { Value: "999.99" },
            { Value: "100.01" },
          ],
        },
      ],
    },
  ],
};

describe("ReportTable Component", () => {
  test("renders the report table with data", () => {
    render(<ReportTable report={mockReport} />);

    // Check if the table headings are rendered
    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Current")).toBeInTheDocument();
    expect(screen.getByText("Previous")).toBeInTheDocument();

    // Check if the section title is rendered
    expect(screen.getByText("Assets")).toBeInTheDocument();

    // Check if the row data is rendered
    expect(screen.getByText("My Account")).toBeInTheDocument();
    expect(screen.getByText("999.99")).toBeInTheDocument();
    expect(screen.getByText("100.01")).toBeInTheDocument();
  });
});
