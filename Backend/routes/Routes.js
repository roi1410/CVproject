const express=require("express")
const routerCreator=express.Router()
const controller= require("../controller/controller")
// here we create rout for the controrler 
routerCreator.route("/addCv").post(controller.createUsersCV)



module.exports=routerCreator