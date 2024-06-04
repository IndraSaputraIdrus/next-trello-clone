import Footer from "@/components/marketing/footer";
import Navbar from "@/components/marketing/navbar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const MarketingLayout = ({ children }: Props) => {
  return (
    <div className="min-h-dvh bg-slate-100 flex flex-col">
      <Navbar />
      <main className="bg-slate-100 pb-20 pt-40 flex-1 flex items-center justify-center">{children}</main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
