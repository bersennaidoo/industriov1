import { Router } from "express"

export const orderRoutes = Router()

orderRoutes.route("/")
  .post((req, res) => {

    res.send("order created")
  })
  .delete((req, res) => {
    res.send("deleted all orders")
  })
  .get((req, res) => {
    res.json({"name": "Product1", "price": "R10"})
  })

// Routes for a single order
orderRoutes.route("/:id")
  .get((req, res) => {
    res.json({"name": "Product2", "price": "R20"})
  })
  .put((req, res) => {
    res.json({"name": "Product3", "price": "R30"})
  })
  .delete((req, res) => {
    res.json({ message: "Successfully deleted order"})
  })