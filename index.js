

const express=require('express')   //Express Server
const bodyParser=require('body-parser')   //
const cors =require('cors')     //bcoz fetching data api frontend to backend used as a middleware ,if we didn;t use we can't fetch



//Importing Required Connections
require("./db/conn")
const moviesRoute=require('./routes/movieRoute')


//Sever Port Details
const app=express();
const port=process.env.PORT||8080;

app.use(cors())


app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(moviesRoute)

app.use(bodyParser.json())



//Response From your Browser
app.get("/",(req,res)=>{
    res.send("Hello From Express")
})


//listeneing Server
app.listen(port,()=>{
    console.log(`Server is listening on the port : http://localhost:${port}`);
})