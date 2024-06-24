
"use client";

import TrackNowComponent from "@/module/track-now/TrackNowComponent";


export default function TrackRequest(
  {
    params: { locale }
  
  }
) {
  return (
    <>
      <TrackNowComponent
      locale={locale}
      />
    </>
  );
}