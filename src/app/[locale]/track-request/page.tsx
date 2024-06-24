
"use client";

import TrackRequestComponent from "@/module/track-request/TrackRequestComponent";

export default function TrackRequest(
  {
    params: { locale }
  
  }
) {
  return (
    <>
      <TrackRequestComponent
      locale={locale}
      />
    </>
  );
}