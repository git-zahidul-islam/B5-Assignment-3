import app from "./app";
import { config } from "./config";
const mongoose = require('mongoose');
import { Server } from "http"

let server: Server;

async function main() {
    await mongoose.connect(config.dbUrl);
    console.log("Database connected");

    server = app.listen(config.port, () => {
        console.log(`Library Management API running on the port ${config.port}`);
    })
};

main();