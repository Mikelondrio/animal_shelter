import connectDB from "../src/config/mongo.js";
import mongoose from 'mongoose';
import shelterController from "../src/controllers/shelters/shelterController.js";
import userController from "../src/controllers/users/userController.js"

let shelterId = null;
let userId = null;
let newUser;
describe("Test de shelterController",()=>{
    beforeAll(async ()=>{
        await connectDB();
        try{
            await mongoose.connection.collections["shelters"].drop();
            newUser = await userController.getByProperty("user_email","mail");
            if(!newUser){
                newUser = await userController.create({user_name:"usuario",user_email:"mimail@mail.com",user_password:"1234"});
            }
        }
        catch(error){
            console.error(error);
        }
    })
    afterAll(async()=>{
        await mongoose.connection.close();
    })

    test("Crear shelter",async()=>{
        const users = await userController.getAll();
        console.log("usuario",users[0])
        const shelterData = {
            shelter_name: "perritos",
            shelter_location: "apatamonasterio",
            shelter_size: 100,
            users:users
        }
        const shelter = await shelterController.create(shelterData)
        shelterId = shelter._id;
        expect(shelter).not.toBeNull();
        
    })
    test("Añadir usuario",async()=>{
        
        userId = newUser._id;
        const shelter = await shelterController.addUser(shelterId,newUser._id);
        expect(shelter).not.toBeNull();
        expect(shelter.users).toContain(newUser._id);

    })
    test("Quitar usuario",async()=>{
        const shelter = await shelterController.removeUser(shelterId,userId);
        expect(shelter).not.toBeNull();
        expect(shelter.users).not.toContain(userId);
    })
})