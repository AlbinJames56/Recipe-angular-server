require('dotenv').config()
const express=require('express')
const cors=require('cors')
const router = require('./Router/router')

const recipeServer=express()
require('./DB/Connection')

recipeServer.use(cors())
recipeServer.use(express.json())
recipeServer.use(router)

const PORT=3000||process.env.PORT
recipeServer.listen(PORT,()=>{
    console.log(`RecipeWorld server started at ${PORT}`);
    
})
recipeServer.get("/",(req,res)=>{
    res.status(200).send(`<h1 style="color:red">Recipe World server started and Running</h1>`)
})