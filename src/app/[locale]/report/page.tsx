"use client";

import ReportComponent from "@/module/report/ReportComponent";

export default function Dashboard({
  params: { locale }

}) {
  return (
    <>
      <ReportComponent locale={locale} />
    </>
  );
}