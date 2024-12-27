import { NextRequest, NextResponse } from "next/server";
import {
    DEFAULT_LOGIN_REDIRECT,
    apiPrefix,
    authRoutes,
    publicRoutes

} from "@/lib/middleware-routes";

export async function middleware(req: NextRequest) {
    const isLoggedIn = !!req.cookies.get("auth_token")?.value; // HTTP-only JWT cookie;
    const { nextUrl } = req;

    const isApiAuthRoutes = nextUrl.pathname.startsWith(apiPrefix);
    const isPublicRoutes = publicRoutes.some(route=> nextUrl.pathname.includes(route));
    const isAuthRoutes = authRoutes.some(route=> nextUrl.pathname.includes(route));

    //API ROUTES
    if(isApiAuthRoutes){
        return NextResponse.next();
    }

    //AUTHENTICATION ROUTES
    if(isAuthRoutes){
        //if user is at login and isLogged in redirect him to dashboard
        if(isLoggedIn){
            return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
        }

        return NextResponse.next();
    }

    //PUBLIC ROUTES
    //if user is not logged in, and they are not in public route then
    //redirect them to login page.
    if(!isLoggedIn && !isPublicRoutes){
        return Response.redirect(new URL(authRoutes[0] as string, nextUrl))
    }

    //otherwise allow all routes
    return NextResponse.next();
}

// Apply the middleware to all routes
export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}