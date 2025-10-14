import { Router } from "express"
import { registerUser } from "../controllers/user.controller.js"
import { upload } from "../middlewares/multer.middleware.js"

const router = Router()

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ]), 
    registerUser)

export default router

// so whenever you are going to import something by your own custom name then use export default otherwise you can
// use export {}
// or you can write export {router as userRouter} :- router is the variable name and userRouter is your custom name 
