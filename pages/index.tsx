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

export default function Home({ token }: JWT) {
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

  useEffect(() => {
    if (token && error) {
      console.log("refresh token");
    }
  }, [error]);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Navbar username={hosts.viewer.email || "username"} />
      <main className="px-5 lg:container py-10 space-y-5">
        {error ? (
          <div className="flex space-x-4 rounded items-center w-full px-5 py-3 bg-yellow-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <p className="">Something went wrong</p>
          </div>
        ) : (
          hosts.viewer.sites.map((site, key) => {
            return <SiteContaier key={key} host={site.host} />;
          })
        )}
      </main>
    </div>
  );
}

// async function refreshAccessToken({ token }: any) {
//   console.log(token);
//   try {
//     const response = await client.mutate({
//       mutation: REFRESH,
//       variables: {
//         token,
//       },
//     });

//     const refreshedTokens = await response.data.users.refresh;

//     console.log(refreshedTokens);

//     return {
//       accessToken: refreshedTokens.accessToken,
//       refreshToken: refreshedTokens.refreshToken, // Fall back to old refresh token
//     };
//   } catch (error) {
//     console.log(error);

//     return {
//       error: "RefreshAccessTokenError",
//     };
//   }
// }

export async function getServerSideProps({ req }: { req: any }) {
  const secret = process.env.NEXTAUTH_SECRET;
  const token = await getToken({ req, secret });
  return {
    props: { token: token?.accessToken },
  };
}
