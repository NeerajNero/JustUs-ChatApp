import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.routes.js'
import cookieParser from 'cookie-parser'
import initialiseDatabase from './db/db.connect.js'
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'
dotenv.config()

const app = express()

app.use(express.json())
app.use(cookieParser())

const PORT = process.env.PORT || 5000

app.use('/api/auth', authRoutes)
app.use('/api/messages', messageRoutes)
app.use('/api/users', userRoutes)
//app.get('/', (req,res) => {
 //   res.send("step 1 completed!!!! Lets GOOO...")
//})

app.listen(PORT, () => {
    initialiseDatabase()
    console.log("server is running on port",PORT)
})