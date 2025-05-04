const appConfig = () => ({
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 3000,
    BASE_PATH: process.env.BASE_PATH || '/api',
    DB_URI: process.env.DB_URI,

    SESSION_SECRET: process.env.SESSION_SECRET,
    SESSION_EXPIRES_IN: process.env.SESSION_EXPIRES_IN || '1d',

    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    GOOGLE_CALLBACK_URL: process.env.GOOGLE_CALLBACK_URL || 'http://localhost:3000/auth/google/callback',

    FRONTEND_URL: process.env.FRONTEND_URL || 'http://localhost:5173',
    FRONTEND_GOOGLE_CALLBACK_URL: process.env.FRONTEND_GOOGLE_CALLBACK_URL || 'http://localhost:5173/auth/google/callback'
});

export const config = appConfig();