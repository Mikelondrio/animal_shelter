import userModel from "../../models/userModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


const getAll = async()=> {
    try {
        const users = await userModel.find();
        return users;
    } catch (error) {
        console.error(error);
        return [];
    }
}
const getById = async(id) =>{
    try {
        const user = await userModel.findById(id);
        return user;
    } catch (error) {
        console.error(error);
        return null;
        
    }
}
const getByProperty = async(property,value) =>{
    try {
        const user = await userModel.find({[property]:value})
        return user;
    } catch (error) {
        return null;
    }
}
const login = async(data) =>{
    const {user_name,user_email,user_password} = data;
    if((!user_name && !user_email ) || !user_password){
        return {error:"faltan datos",status:400};
    }
    try {
        let user;
        if(user_email){
            const users = await getByProperty("user_email",user_email);
            user = users[0];
        }
        else{
            const users = await getByProperty("user_name",user_name);
            user = users[0];
        }
        if(!user){
            return {error:"No existe el usaurio",status:400};
        }
        console.log("contraseña",user_password,user.user_password);
        const isPasswordCorrect = await bcrypt.compare(user_password,user.user_password);
        if(!isPasswordCorrect){
            return {error:"Combinación de usaurio y contraseña erroneos",status:400};
        }
        console.log("login user",user)
        const token = jwt.sign({_id:user._id,user_name:user.user_name,user_rol:user.user_rol},process.env.JWT_SECRET,{expiresIn: 60 * 60})
        return {token};

        
    } catch (error) {
        console.error(error);
        return {error:"Ha habido un falla epica",status:500};
    }
}
const register = async(data) => {
    const {user_name,user_email,user_password,passwordRepeat} = data;
    if(!user_name || !user_email || !user_password || !passwordRepeat){
        return {error:"Hay campos vacios"};
    }
    if(user_password !== passwordRepeat){
        return {error:"Las contraseñas no coinciden"};
    }
    const userData = {
        user_name,
        user_email,
        user_password,
        user_rol:"user"
    }
    const user = await create(userData);
    return user;
}
const create = async(data) =>{
    try {
        const hash = await bcrypt.hash(data.user_password,10);
        data.user_password= hash;
        const user = await userModel.create(data);
        return user;
    } catch (error) {
        console.error(error); 
        return null;  
    }
}

const update = async(id,data) =>{
    try {
        const user = await userModel.findByIdAndUpdate(id,data);
        return user;
    } catch (error) {
        console.error(error);
        return null;
    }
}

const remove = async(id) =>{
    try {
        const user = await userModel.findByIdAndDelete(id);
        return user;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const functions = {
    getAll,
    getById,
    getByProperty,
    create,
    update,
    remove,
    register,
    login
}

export default functions;