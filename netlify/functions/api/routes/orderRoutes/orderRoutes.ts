import { Router } from "express"
import { OrderHandlers } from "../../handlers/orderHandlers/orderHandlers"

export class OrderRoutes {

    router: Router
    ohandler: OrderHandlers

    constructor(router: Router, ohandler: OrderHandlers) {
        this.router = router
        this.ohandler = ohandler

         this.router.route("/")
          .post(this.ohandler.addOrder)
    }
}