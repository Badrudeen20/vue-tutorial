import express from 'express'
import connectDB from "./helper/db.js";
import song from "./routes/song.js";
import cors from 'cors'
const app = express()
app.use(cors())

const port = process.env.PORT || '8000'
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017";
const DB_NAME = 'mevn'
// // Database Connection
 connectDB(DATABASE_URL,DB_NAME);

// JSON
app.use(express.json())

// Load Routes
app.use("/api", song)

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
