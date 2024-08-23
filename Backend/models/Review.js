const mongoose=require('mongoose');

const reviewSchema=new mongoose.Schema({
    qualityOfWork: {
        type: Number,
        min: 0,
        max: 5,
        required: true 
    },
    adherenceToDeadlines: { 
        type: Number, 
        min: 0, 
        max: 5, 
        
        required: true },
    adaptability: { 
        type: Number, 
        min: 0, 
        max: 5, 
        required: true },
    problemSolving: { 
        type: Number, 
        min: 0, 
        max: 5, 
        required: true },
    comment:{
        type:String,
        trim:true,
        required:true
    }
},{
    timestamps:true
})

let Review=mongoose.model('Review',reviewSchema);
module.exports=Review;