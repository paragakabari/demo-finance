
"use client";

import TrackRequestIdComponent from "@/module/track-request-id/TrackRequestIdComponent";

export default function TrackRequest(
  {
    params: { locale }
  
  }
) {
  return (
    <>
      <TrackRequestIdComponent
      locale={locale}
      />
    </>
  );
}