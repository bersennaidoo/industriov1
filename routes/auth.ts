import jwt from "jsonwebtoken"
import { Router } from "express"

import jwtConfig from "../config"

const { cookieName, secret } = jwtConfig

export const authRoutes = Router()
const TWELVE_HOURS = 12 * 60 * 60 * 1000

authRoutes.get("/current-user", (req, res) => {

    res.json({ name: "currentUser" })
})

authRoutes.get("/login", (req, res) => {

    res.json({login: "successfull"})
})

authRoutes.post("/logout", (req, res) => {

    res.json({logout: "Successful"})
})

