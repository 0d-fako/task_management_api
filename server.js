const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")
const swaggerUi = require("swagger-ui-express")
const swaggerDocument = require("./api-docs/swagger.json")



app = express()
dotenv.config()
app.use(cors())
app.use(express.json())
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))

// app.use('/api', authRoutes)
