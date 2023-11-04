import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";
import FacebookProvider from "next-auth/providers/facebook";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import LinkedInProvider from "next-auth/providers/linkedin";
import TwitterProvider from "next-auth/providers/twitter";

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
    }),
    LinkedInProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
    }),

    CredentialsProvider({
      async authorize(credentials, req) {
        const { email, password } = credentials;

        const prisma = new PrismaClient();
        const user = await prisma.users.findFirst({ where: { email: email } }); //make user object {id: user.id, name: user, email: email}

        if (!user) {
          throw new Error("Invalid email or password");
        }
        if (!user.password) {
          throw new Error("Please login via the method you used to signup");
        }

        // const reqData = await bcrypt.hash(password, 10);
        const isPasswordMatched = await bcrypt.compare(password, user.password);
        // console.log(reqData);
        if (!isPasswordMatched) {
          throw new Error("Invalid email or password");
        }

        return user;
      },
    }),
  ],

  callbacks: {
    // save user if they login via social networks
    async signIn({ user }) {
      const { email } = user.email;
      const prisma = new PrismaClient();
      let dbUser = await prisma.users.findFirst({
        where: { email: user.email },
      });
      console.log(dbUser);
      if (!dbUser) {
        dbUser = await prisma.users.create({
          data: { name: user.name, email: user.email },
        });
      }

      return true;
    },
    // add additional user info to the session (jwt, session)
    jwt: async ({ token, user }) => {
      const prisma = new PrismaClient();

      // console.log("jwt callback", token, user);
      const userByEmail = await prisma.users.findFirst({
        where: { email: user.email },
      });
      userByEmail.password = undefined;
      token.user = userByEmail;

      return token;
    },
    session: async ({ session, token }) => {
      console.log("session callback", session, token);
      session.user = token.user; // jwt token.user is accessed here
      console.log("========== *****-----   -------");
      console.log(token.user);
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};
