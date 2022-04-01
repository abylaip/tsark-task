import React, { useEffect } from "react";
import Navbar from "@components/Navbar";
import SiteContaier from "../components/SiteContainer";
import { getToken, JWT } from "next-auth/jwt";
import { useRouter } from "next/router";

export default function Home({ token }: { token: JWT }) {
  const router = useRouter();
  useEffect(() => {
    if (!token) {
      router.push("/login");
    }
  }, []);
  return (
    <div className="bg-slate-50 min-h-screen">
      <Navbar />
      <main className="px-5 lg:container py-10 space-y-5">
        <SiteContaier host="Anelya" />
        <SiteContaier host="Anelya" />
        <SiteContaier host="Anelya" />
        <SiteContaier host="Anelya" />
        <SiteContaier host="Anelya" />
        <SiteContaier host="Anelya" />
        <SiteContaier host="Anelya" />
        <SiteContaier host="Anelya" />
        <SiteContaier host="Anelya" />
        <SiteContaier host="Anelya" />
        <SiteContaier host="Anelya" />
        <SiteContaier host="Anelya" />
        <SiteContaier host="Anelya" />
        <SiteContaier host="Anelya" />
        <SiteContaier host="Anelya" />
        <SiteContaier host="Anelya" />
        <SiteContaier host="Anelya" />
        <SiteContaier host="Anelya" />
        <SiteContaier host="Anelya" />
        <SiteContaier host="Anelya" />
        <SiteContaier host="Anelya" />
        <SiteContaier host="Anelya" />
        <SiteContaier host="Anelya" />
        <SiteContaier host="Anelya" />
      </main>
    </div>
  );
}

export async function getServerSideProps({ req }: { req: any }) {
  const secret = process.env.NEXTAUTH_SECRET;
  const token = await getToken({ req, secret });
  return {
    props: { token: token?.accessToken },
  };
}
