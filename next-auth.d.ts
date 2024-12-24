declare module "next-auth" {
  import NextAuth from "next-auth";

  interface Session {
    id: string;
  }

  interface JWT {
    id: string;
  }

  export default NextAuth;
}
