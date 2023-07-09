const User = require('../models/userSchema')
const moment=require('moment')

//get all users
//method:GET
//path:user/getallusers
const getUsers = async(req, res) => {    
    try{
        const users=await User.find();
        res.status(200).json(users)
    }catch(error){
        res.status(400).json(error)
    }
}


//register user
//method:POST
//path:user/register

const createUsers = async (req, res) => {
    const image= req.file.filename
    console.log(req.body,image)
    const { fullname, email, phonenumber, gender, location } = req.body;
    if(!fullname||!email||!phonenumber||!gender||!location )
    {
        return res.status(400).json({ error: "All fields required" })
    }

    try {
        const old_user = await User.findOne({ email: email })

        if (old_user) {
            return res.status(400).json({ error: "user already exists" })
        } 
        else {
            const datecreated = moment(new Date()).format("YYYY-MM-DD hh:mm:ss")
            
            const userData = new User({
                fullname, email, image: image, location,phonenumber,gender, datecreated
            })
            await userData.save();
            return res.status(200).json(userData)
        }
    } catch (error) {       
        console.log(error)
    } 
}

const updateUsers = (req, res) => {
    res.status(200).json({ message: `updated user at ${req.params.id}` })
}
const deleteUsers = (req, res) => {
    res.status(200).json({ message: `deleted user at ${req.params.id}` })
}
const getUser = (req, res) => {
    res.status(200).json({ message: `fetched user at ${req.params.id}` })
}



module.exports = { getUsers, updateUsers, deleteUsers, createUsers, getUser }