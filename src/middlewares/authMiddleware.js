import jwt from "jsonwebtoken";
import userController  from "../controllers/user/userController.js";

const isAuthenticated = async(req,res,next)=>{
    const authorization  =req.headers.authorization;
    if(!authorization){
        return res.status(401).json({error:"no hay token jwt"});
    }
    try {
        const token = authorization.split("Bearer ")[1];
        const decoded =jwt.verify(token,process.env.JWT_SECRET);
        const user = await userController.getById(decoded._id);
        if(!user){
            return res.status(400).json({error:"No existe el usaurio"});
        }
        req.user = user;
        next();
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({error:"ha habido una falla epica"});
    }

}

const isAdmin = async(req,res,next)=>{
    const authorization  =req.headers.authorization;
    if(!authorization){
        return res.status(401).json({error:"no hay token jwt"});
    }
    try {
        const token = authorization.split("Bearer ")[1];
        const decoded =jwt.verify(token,process.env.JWT_SECRET);
        const user = await userController.getById(decoded._id);
        if(!user){
            return res.status(400).json({error:"No existe el usaurio"});
        }
        if(user.user_rol !== "admin"){
            return res.status(401).json({error:"No estás autorizado"});
        }
        req.user = user;
        next();
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({error:"ha habido una falla epica"});
    }

}

export {
    isAuthenticated,
    isAdmin
}