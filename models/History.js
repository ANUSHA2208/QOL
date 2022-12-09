import mongoose from "mongoose";
import jwt from "jsonwebtoken";

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

// create and return jwt token
historySchema.methods.getJwtToken=function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRY
    })
}
const History  = mongoose.model("History",historySchema)

export default History;