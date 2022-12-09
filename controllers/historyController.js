import History from "../models/History.js";
import bigPromise from "../middlewares/bigPromise.js";
import { cookieToken, historyToken } from "../utils/cookieToken.js";

export const saveHistory = bigPromise(async(req,res,next)=>{
    const {physicalScore,mentalScore,socialScore,environmentalScore}=req.body;
    const history = await History.create({
        userId:req.user._id,
        physicalScore,
        mentalScore,
        socialScore,
        environmentalScore
    }).catch(err=>{
        console.log(`cannot create history ${err}`)
        return null
    })

    if(history===null){
        return res.status(400).json({
            success:false,
            message:"Failed to create history !"
        })
    }

    historyToken(history,res,"History created !")
    // return res.status(200).json({
    //     success:true,
    //     message:"History created !"
    // })
})


export const getAllHistory = bigPromise(async(req,res,next)=>{
    const history = await History.find({userId:req.user._id}).lean().catch(err=>{
        console.log(`failed to fetch all  history ${err}`)
        return null
    })

    if(history===null){
        return res.status(400).json({
            success:false,
            message:"No History found 1"
        })
    }
    
    return res.status(200).json({
        success:true,
        message:"Histories found !",
        data:history
    })
})


