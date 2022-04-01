import React from "react";
import Navbar from "../components/Navbar";
import SiteContaier from "../components/SiteContainer";

export default function Home() {
  return (
    <div className="bg-slate-50 h-screen">
      <Navbar />
      <main className="container py-10 space-y-5">
        <SiteContaier host="Anelya" />
        <SiteContaier host="Anelya" />
        <SiteContaier host="Anelya" />
        <SiteContaier host="Anelya" />
      </main>
    </div>
  );
}
