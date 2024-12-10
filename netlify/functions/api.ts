import express, { Router } from "express";
import http from "http"
import bodyParser from "body-parser";
//import cookieParser from "cookie-parser"
import serverless from "serverless-http";
import { Index } from "./api/index"
import { OrderHandlers } from "./api/handlers/orderHandlers/orderHandlers";
import { OrderRoutes } from "./api/routes/orderRoutes/orderRoutes";

const api = express();

const ohandler = new OrderHandlers()
const orouter = new OrderRoutes(Router(), ohandler)
const irouter = new Index(orouter, Router())

api.use(bodyParser.json())
api.use(bodyParser.urlencoded({ extended: true }))
//api.use(cookieParser())

api.use("/api/", irouter.router);

//export const handler = serverless(api);

const server = http.createServer(api)

server.listen("3030", () => {
    console.log("listening")
})

