import ReportTable from "@/components/ReportTable";
import { fetchReport } from "@/lib/api";

export default async function Page() {
  let reportData;
  try {
    reportData = await fetchReport();
  } catch (error) {
    console.error("Error fetching report:", error);
    return <p>Error fetching report data. Please try again later.</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Balance Sheet Report</h1>
      {reportData ? (
        <ReportTable report={reportData.Reports[0]} />
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}
