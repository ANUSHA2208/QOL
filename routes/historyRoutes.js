import express from "express"
const router = express.Router()

// import controller 
import { getAllHistory, saveHistory } from "../controllers/historyController.js"
// import userMiddlewares
import {isLoggedIn,customRole} from "../middlewares/userMiddlewares.js"

router.route("/saveHistory").post(isLoggedIn,saveHistory)
router.route("/history").get(isLoggedIn ,getAllHistory)



export default router;