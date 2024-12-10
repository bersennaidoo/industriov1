import { Request, Response } from "express"

export class OrderHandlers {

    public addOrder(req: Request, res: Response) {
        res.send("order created")
    }
}