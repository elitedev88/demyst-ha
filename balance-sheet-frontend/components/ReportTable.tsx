import React from "react";
import { Report } from "@/types";

interface ReportTableProps {
  report: Report;
}

const ReportTable: React.FC<ReportTableProps> = ({ report }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="w-full bg-gray-100">
            <th className="text-left py-4 px-4 uppercase font-semibold text-sm">
              Title
            </th>
            <th className="text-right py-4 px-4 uppercase font-semibold text-sm">
              Current
            </th>
            <th className="text-right py-4 px-4 uppercase font-semibold text-sm">
              Previous
            </th>
          </tr>
        </thead>
        <tbody>
          {report.Rows.map((section, index) => (
            <React.Fragment key={index}>
              {section.Title && (
                <tr>
                  <td className="py-3 px-4 text-left font-semibold" colSpan={3}>
                    {section.Title}
                  </td>
                </tr>
              )}
              {section.Rows?.map((row, idx) => (
                <tr
                  key={idx}
                  className={
                    row.RowType === "SummaryRow" ? "font-bold bg-gray-50" : ""
                  }
                >
                  {row.Cells?.map((cell, idy) => (
                    <td
                      key={idy}
                      className={`py-3 px-4 ${
                        idy === 0 ? "text-left" : "text-right"
                      }`}
                    >
                      {cell.Value}
                    </td>
                  ))}
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportTable;
