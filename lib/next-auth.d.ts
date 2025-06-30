// lib/next-auth.d.ts

import { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface User extends DefaultUser {
    id: string;
    role: "Host" | "Audient";
  }

  interface Session {
    user: {
      id: string;
      role: "Host" | "Audient";
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: "Host" | "Audient";
  }
}
