import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher(["/organization(.*)"]);

export default clerkMiddleware((auth, request) => {
  if (isProtectedRoute(request)) {
    auth().protect();
  }

  const { userId, orgId } = auth()
  if (userId && !isProtectedRoute(request)) {
    let path = "/select-org"

    if (orgId) {
      path = `/organization/${orgId}`
    }

    const orgSelection = new URL(path, request.url)
    return NextResponse.redirect(orgSelection)
  }

  if (!userId && isProtectedRoute(request)) {
    return auth().redirectToSignIn({
      returnBackUrl: request.url
    })
  }

  if (userId && !orgId && request.nextUrl.pathname !== "/select-org") {
    return NextResponse.redirect(new URL('/select-org', request.url))
  }

  if (request.nextUrl.pathname === "/organization") {
    return NextResponse.redirect(new URL('/select-org', request.url))
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
