/**
 * 
 * Array of routes that are accessible to the public
 * these routes do not require authentication
 * @type { string[] }
 */
export const publicRoutes = [
    "/",
];

/**
 * 
 * Array of routes that are used for authentication
 * these routes will redirect logged user to /admin -> dashboard
 * @type { string[] }
 */
export const authRoutes = [
    "/login",
    "/signup",
    "/forgot-password",
    "/reset-password",
]

/**
 * 
 * The routes for APIs 
 * Routes that start with this prefix are used for api calls
 * @type { string }
 */
export const apiPrefix = "/api";


/**
 * 
 * Default redirect path after logging in.
 * @type { string }
 */
export const DEFAULT_LOGIN_REDIRECT = "/dashboard";