import connectDB from "../src/config/mongo.js";
import mongoose from 'mongoose';
import userController from "../src/controllers/user/userController.js";

const userData = {
    user_email:"mimail@mail.com",
    user_name:"usuario",
    user_password:"1234",
    user_city:"NewShelter",
    user_rol:"admin"
}

describe("Test de userController",()=>{
    beforeAll(async ()=>{
        await connectDB();
        await mongoose.connection.collections["users"].drop();
    })
    afterAll(async()=>{
        await mongoose.connection.close();
    })

    test("añadir usuario",async()=>{
        const user = await userController.create(userData);
        expect(user.user_email).toEqual(userData.user_email);
        expect(user.user_name).toEqual(userData.user_name);
        expect(user.user_city).toEqual(userData.user_city);
        expect(user.user_rol).toEqual(userData.user_rol);
    })
    test("buscar usuario por propiedad",async()=>{
        const users= await userController.getByProperty("email","mimail@mail.com");
        expect(users.length).toBeGreaterThanOrEqual(1);
        const user = users[0];
        console.log("user",user);
        expect(user.user_email).toEqual(userData.user_email);
        expect(user.user_name).toEqual(userData.user_name);
        expect(user.user_city).toEqual(userData.user_city);
        expect(user.user_rol).toEqual(userData.user_rol);

    })
    test("buscar usuario por id",async()=>{
        const users= await userController.getByProperty("email","mimail@mail.com");
        const newUser = await userController.getById(users[0]._id);
        expect(newUser).not.toBeNull();
        expect(newUser.user_email).toEqual(userData.user_email);
        expect(newUser.user_name).toEqual(userData.user_name);
        expect(newUser.user_city).toEqual(userData.user_city);
        expect(newUser.user_rol).toEqual(userData.user_rol);
    })
    
})