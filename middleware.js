import { withAuth } from "next-auth/middleware";
// export { default } from "next-auth/middleware";
import { NextResponse } from "next/server";

export const config = {
  matcher: ["/admin/:path*"],
};

// role based authorization
export default withAuth(
  async function middleware(req) {
    const url = req.nextUrl.pathname;
    const userRole = req?.nextauth?.token?.user?.role;
    const roles = process.env.ADMIN_ROLES;

    // cors
    if (url?.includes("/api/")) {
      // console.log(roles);
      NextResponse.next().headers.append("Access-Control-Allow-Origin", "*");
      return NextResponse.next();
    }

    if (url?.includes("/admin/myapp") && roles.includes(userRole)) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        if (!token) {
          return false;
        }
      },
    },
  }
);
