"use client";
import DashBoard from "@/module/dashboard/DashBoard";

export default function Dashboard({
  params: { locale }

}) {
  return (
    <>
      <DashBoard locale={locale} />
    </>
  );
}