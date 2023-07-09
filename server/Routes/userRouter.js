const router=require('express').Router();
const {createUsers,getUsers}=require("../Controllers/userController");
// const {getUsers,updateUsers,deleteUsers,createUsers,getUser}=require("../Controllers/userController");
const upload=require('../multerconfig/storageConfig')

router.route("/register").post(upload.single("image"),createUsers )

router.route("/getallusers").get(getUsers)

// router.route("/:id").get(getUser).put(updateUsers).delete(deleteUsers)



module.exports=router;