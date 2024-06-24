"use client";

import BuyerDetailComponent from "@/module/buyer-detail/BuyerDetailComponent";

export default function BuyerDEtail({
  params: { locale }

}) {
  return (
    <>
      <BuyerDetailComponent locale={locale}  />
    </>
  );
}