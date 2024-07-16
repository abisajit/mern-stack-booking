const mongoose=require("mongoose")

const MoviesSchema=new mongoose.Schema({
    Title:{
        type:String,
        required:[true,"title is required"],
    },
    Rating:{
        type:Number,
    },
    Comments:{
        type:String,
        required:[true,"comments is required"],
    },
    BestPart:{
        type:String,
        required:[true,"bestpart is required"],
    },
    Improve:{
        type:String,
        required:[true,"improve is required"],
    }
})

//Exporting
const movies=new mongoose.model('movies',MoviesSchema)


module.exports=movies;