import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.js"
import connectDB from "./db/connectDB.js"

dotenv.config()
const app = express()
const PORT = process.env.PORT
app.use("/api/auth",authRoutes)

app.listen(PORT,()=>{
    console.log(`server is runnig on port: ${PORT}`)
    connectDB()
})