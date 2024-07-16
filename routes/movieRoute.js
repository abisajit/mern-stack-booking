const express=require("express")
const movies=require('../models/movies')


const router=express.Router()

//create our route(Post)
router.post("/movies",async(req,res)=>{
    console.log(req.body);
    const data=new movies(req.body)
    const result=await data.save()

    if(!result){
        res.json({
            status:"FAILED",
            message:"FeeedBack Not Added Successfully."
        })
    }
    else{
        res.json({
            status:"SUCCESS",
            meassage:"Feedback Added Successfully",
            data:result
        })
    }
})


//GET Route

//Get All Records
router.get("/movies",async(req,res)=>{
try {
    const result=await movies.find()
    if(!result){
        res.json({
            status:"FAILED",
            message:"NOT FOUND RECORDS"
        })
    }
    else{
        res.json({
            status:"SUCCESS",
            message:"RECORDS FOUND",
            data:result
        })
    }
} catch (error) {
    console.log(error);
}
})


//Get Single records
router.get("/movies/:id",async(req,res)=>{
try {
    const _id=req.params.id;
    const result=await movies.findById(_id)
    if(!result){
        res.json({
            status:"FAILED",
            message:"RECORD NOT FOUND ON THIS ID"
        })
    }
    else{
        res.json({
            status:"SUCCESS",
            message:"RECORDS FOUND ON THIS ID",
            data:result
        })
    }
} catch (error) {
    console.log(error);
}
})















//Update Records
router.put("/movies/:id",async(req,res)=>{
    try {
        const _id=req.params.id;
        const result=await movies.findByIdAndUpdate(_id,req.body,req.body,{new:true})
        if(!result){
            res.json({
                status:"FAILED",
                message:"RECORD NOT Updated Succesfully"
            })
        }
        else{
            res.json({
                status:"SUCCESS",
                message:"RECORD UPDATED Succesfully",
                data:result
            })
        }
    } catch (error) {
        console.log(error);
    }
})






//Delete Records(Working)
router.delete("/movies/:id",async(req,res)=>{
    try {
        const _id=req.params.id;
        const result=await movies.findByIdAndDelete(_id)
        if(!result){
            res.json({
                status:"FAILED",
                message:"RECORD NOT DELETED Succesfully"
            })
        }
        else{
            res.json({
                status:"SUCCESS",
                message:"RECORD DELETED Succesfully",
                data:result
            })
        }
    } catch (error) {
        console.log(error);
    }
})


module.exports=router;