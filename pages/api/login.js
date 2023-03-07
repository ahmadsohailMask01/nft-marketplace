import connect from "../../lib/mongodb";
import User from "../../model/schema.js";

connect();

export default async function handler(req,res){
    const {email,pass} = req.body;
    const user = await User.findOne({email,pass});
    if(!user){
        return res.json({status:"Not able to find the user"});
    }
    else{
        res.redirect("/");
    }
}