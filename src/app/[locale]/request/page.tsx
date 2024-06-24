
"use client";
import RequestComponent from "@/module/request/RequestComponent";

export default function Request({
  params: { locale }
}) {
  return (
    <>
      <RequestComponent locale={locale} />
    </>
  );
}