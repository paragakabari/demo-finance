
"use client";

import TrackRequestDetailComponent from "@/module/track-request-detail/TrackRequestDetailComponent";

export default function TrackRequest(
  {
    params: { locale }
  
  }
) {
  return (
    <>
      <TrackRequestDetailComponent
      locale={locale}
      />
    </>
  );
}