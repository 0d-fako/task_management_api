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

const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes);

const boardRoutes = require('./routes/boardRoutes');
app.use('/boards', boardRoutes);

const taskRoutes = require('./routes/taskRoutes');
app.use('/tasks', taskRoutes);

const PORT = process.env.PORT

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch((err) => {
    console.error("Error connecting to MongoDB:", err);
    
});

app.get("/", (req, res) => {
    res.send("Welcome to Task Management API");
});

