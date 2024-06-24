
"use client";

import TrackOrderComponent from "@/module/track-order/TrackOrderComponent";


export default function TrackOrder(
  {
    params: { locale }
  
  }
) {
  return (
    <>
      <TrackOrderComponent
      locale={locale}
      />
    </>
  );
}