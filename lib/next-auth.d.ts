// /lib/next-auth.d.ts
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: "Host" | "Audient";
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    role: "Host" | "Audient";
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: "Host" | "Audient";
  }
}
