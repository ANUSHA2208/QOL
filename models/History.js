import mongoose from "mongoose";

const historySchema = new mongoose.Schema({
    userId:{
        type:mongoose.Types.ObjectId
    },
    physicalScore:{
        type:String
    },
    mentalScore:{
        type:String
    },
    socialScore:{
        type:String
    },
    environmentalScore:{
        type:String
    }
},
{
    timestamps:true
})

const History  = mongoose.model("History",historySchema)

export default History;