import connectDB from "../src/config/mongo.js";
import mongoose from 'mongoose';
import animalController from "../src/controllers/animal/animalController.js";
import shelterController from "../src/controllers/shelter/shelterController.js";
import userController from "../src/controllers/user/userController.js";

const animalData = {
    animal_specie: "dog",
    animal_sex : "male"
}

let shelterId;
let newUser;
let animalId;
describe("Test de animalController",()=>{
    beforeAll(async ()=>{
        await connectDB();
        try {
            
            await mongoose.connection.collections["animals"].drop();
            newUser = await userController.getByProperty("user_email","mimail@mail.com");
            if(!newUser){
                newUser = await userController.create({user_name:"usuario",user_email:"mimail@mail.com"});
            }
            console.log("newUser",newUser);
        } catch (error) {
            console.error(error);   
        }
    })
    afterAll(async()=>{
        await mongoose.connection.close();
    })

    test("añadir animal",async()=>{
        const shelters = await shelterController.getAll();
        shelterId = shelters[0]._id;
        animalData.shelter = shelterId;
        const animal = await animalController.create(animalData);
        expect(animal).not.toBeNull();
        expect(animal.animal_specie).toEqual(animalData.animal_specie);
        expect(animal.animal_sex).toEqual(animalData.animal_sex);
        expect(animal.shelter).toEqual(animalData.shelter);
        animalId=animal._id;

    })
    test("buscar animals por shelter",async()=>{
        const animals= await animalController.getAll(shelterId);
        expect(animals.length).toBeGreaterThanOrEqual(1);
        const animal = animals[0];
        expect(animal.animal_specie).toEqual(animalData.animal_specie);
        expect(animal.animal_sex).toEqual(animalData.animal_sex);
        expect(animal.shelter).toEqual(shelterId);
    })
    test("Añadir usuario",async()=>{
        
        const animal = await animalController.addUser(animalId,newUser._id);
        expect(animal).not.toBeNull();
        expect(animal.users).toContain(newUser._id);

    })
    /* test("Quitar usuario",async()=>{
        const animal = await animalController.removeUser(animalId,newUser._id);
        expect(animal).not.toBeNull();
        expect(animal.users).not.toContain(newUser._id);
    }) */
})