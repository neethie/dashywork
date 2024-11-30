import express from "express";
import swaggerUI from "swagger-ui-express";
import swaggerSpec from "./config/swagger";
import cors, { CorsOptions } from "cors";
import morgan from "morgan";
import router from "./router";
import db from "./config/db";

async function connectDB() {
    try {
        await db.authenticate();
        db.sync();
        //console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Error connecting to the database: ", error);
    }
}

connectDB();

// Instancia
const server = express();

// Cors
const corsOptions: CorsOptions = {
    origin: function (origin, callback) {
        if (origin === process.env.FRONTEND_URL) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
};
server.use(cors(corsOptions));
// Leer datos
server.use(express.json());
server.use(morgan("dev"));
server.use("/api/employees", router);

// Docs
server.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

export default server;
