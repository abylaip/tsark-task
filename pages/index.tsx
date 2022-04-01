import React, { useEffect, useState } from "react";
import Navbar from "@components/Navbar";
import SiteContaier from "../components/SiteContainer";
import { getToken, JWT } from "next-auth/jwt";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { VIEWER } from "graphql/query";

interface Sites {
  host: string;
}

interface Data {
  viewer: {
    email: string;
    sites: Sites[];
  };
}

export default function Home({ token }: { token: JWT }) {
  const router = useRouter();
  const [hosts, setHosts] = useState<Data>({
    viewer: { email: "", sites: [] },
  });

  useEffect(() => {
    if (!token) {
      router.push("/login");
    }
  }, []);

  const { error } = useQuery(VIEWER, {
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    onCompleted: (data) => {
      setHosts(data);
    },
  });

  if (error) {
    return <div>{JSON.stringify(error)}</div>;
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      <Navbar username={hosts.viewer.email || "username"} />
      <main className="px-5 lg:container py-10 space-y-5">
        {error ? (
          <p>{JSON.stringify(error)}</p>
        ) : (
          hosts.viewer.sites.map((site, key) => {
            return <SiteContaier key={key} host={site.host} />;
          })
        )}
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
