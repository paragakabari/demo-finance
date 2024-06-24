"use clinet"

import { LoginComponent } from "@/module/login/LoginComponent";

export default function Home({
  params: { locale }
}) {

  return (
    <>
      <LoginComponent locale={locale} />

    </>
  );
}
