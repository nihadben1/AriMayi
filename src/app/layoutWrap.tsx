"use client";

import { usePathname } from "next/navigation";
import Navbar from "./components/navbar";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const hideNavbar = pathname === "/";

  return (
    <>
      {!hideNavbar && <Navbar />}
      <main className={`${!hideNavbar ? "pt-20" : ""} `}>
        {children}
      </main>
    </>
  );
};

export default LayoutWrapper;
