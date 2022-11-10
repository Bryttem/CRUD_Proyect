import { Express } from 'express';
import authRouter from './auth/router';
import gamesRouter from './videoGames/router';

const router = (app: Express) => {
    app.use("/auth", authRouter);
    app.use("/videoGames", gamesRouter);
}

export default router;

