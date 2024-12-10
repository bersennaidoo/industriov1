import { Router } from "express"

export const employeeRoutes = Router()

const currentEmployeesOfTheMonth = ["ashley", "alice"]

employeeRoutes.get("/isEmployeeOfTheMonth", (req, res) => {

    res.json({ isEmployeeOfTheMonth: "Alice" })
}) 