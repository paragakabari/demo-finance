"use client"
import Header from "./header";
import { usePathname } from "next/navigation";

export const LayoutCustom = ({ children, locale }) => {
  const pathname = usePathname();
  
  const avoidHeaderFoot = ["/en","/ar"];
  return (
    <div>
      {!avoidHeaderFoot.includes(pathname) && <Header locale={locale} />}
      {children}
    </div>
  );
};
