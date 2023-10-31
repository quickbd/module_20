import { authOptions } from "@/utility/authOptions";
import NextAuth from "next-auth";
const handler = NextAuth(authOptions);

export { handler as DELETE, handler as GET, handler as POST, handler as PUT };
