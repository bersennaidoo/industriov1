import { Router } from "express";
import { OrderRoutes } from "./routes/orderRoutes/orderRoutes";

export class Index {
    public ordRoute: OrderRoutes
    public router: Router

    constructor(ordRoute: OrderRoutes, router: Router) {
        this.ordRoute = ordRoute
        this.router = router

        this.router.use("/orders", this.ordRoute.router)

    }
}