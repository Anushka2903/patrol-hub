import express from "express";
import cors from "cors";
import { ConfigureDb } from "./src/Config/dbConfig.js";
import router from "./src/Router/DepartmentRouter.js";
import userRouter from "./src/Router/userRouter.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.use(userRouter);

const PORT = process.env.PORT || 5800;

async function startServer() {
    try {
        await ConfigureDb();
        app.listen(PORT, () => {
            console.log(`Server is Running Port number ${PORT}`);
        });
    } catch (error) {
        process.exit(1);
    }
}

startServer();
