import { Router } from "express"

import { orderRoutes } from "./orders"
import { authRoutes } from "./auth"
import { itemsRoutes } from "./items"
import { employeeRoutes } from "./employees"

export const routes = Router()

routes.use("/orders", orderRoutes)
routes.use("/auth", authRoutes)
routes.use("/items", itemsRoutes)
routes.use("/employees", employeeRoutes)