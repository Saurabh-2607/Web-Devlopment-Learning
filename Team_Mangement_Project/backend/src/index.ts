import "dotenv/config";
import express, {NextFunction, Request, Response} from "express";
import cors from "cors";
import session from "cookie-session";
import {config} from "./config/app.config";

const app = express();
const BASE_PATH = config.BASE_PATH;

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use(
    session({
        name: "session",
        keys: [config.SESSION_SECRET ?? "default_secret_key"],
        maxAge: 24 * 60 * 60 * 1000,
        secure: config.NODE_ENV === "production",
        httpOnly: true,
        sameSite: "lax",
    })
);

app.use(
    cors({
        origin: config.FRONTEND_URL,
        credentials: true,
    })
);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
        message: "Welcome to the backend API!",
    });
});

app.listen(config.PORT,async () => {
    console.log(`Server is running on http://localhost:${config.PORT}${BASE_PATH}`);
});
