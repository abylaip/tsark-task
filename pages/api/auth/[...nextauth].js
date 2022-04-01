import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { LOGIN } from "../../../graphql/mutations/login";
import client from "../../../apollo-client";

const providers = [
  CredentialsProvider({
    name: "Credentials",
    credentials: {
      email: {
        label: "email@example.com",
        type: "text",
      },
      password: {
        label: "password",
        type: "text",
      },
    },
    async authorize(credentials) {
      const email = credentials?.email;
      const password = credentials?.password;
      try {
        const users = await client.mutate({
          mutation: LOGIN,
          variables: {
            email,
            password,
          },
        });
        const user = users.login;
        if (user) {
          return user;
        } else {
          return null;
        }
      } catch (error) {
        return null;
      }
    },
    session: {
      strategy: "jwt",
      maxAge: 24 * 60 * 60, // 24 hours
    },
  }),
];

const callbacks = {
  async jwt({ token, user }) {
    if (user) {
      token.accessToken = user.token.accessToken;
    }

    return token;
  },

  async session({ session, token }) {
    session.accessToken = token.accessToken;
    return session;
  },
};

const pages = {
  signIn: "/login",
};

const options = {
  providers,
  callbacks,
  pages,
  secret: process.env.NEXT_AUTH_SECRET,
};

export default (req, res) => NextAuth(req, res, options);
