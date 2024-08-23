import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'


const app=express()

dotenv.config()


// middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())



mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log('connected to db')
})
.catch((e)=>{
    console.log(e)
})

// connectDb()



app.listen(8080,()=>{
    console.log("Server connected at 8080")
})