import animalModel from "../../models/animalModel.js";
import shelterController from "../shelter/shelterController.js";

const getAll = async()=> {
    try {
        const animals = await animalModel.find();
        return animals;
    } catch (error) {
        console.error(error);
        return [];
    }
}
const getById = async(id) =>{
    try {
        const animal = await animalModel.findById(id);
        return animal;
    } catch (error) {
        console.error(error);
        return null;
        
    }
}

const create = async(data) =>{
    try {
        // si data es un array de objetos, crear un nuevo registro para cada uno de ellos y añadir al refugio correspondiente
        if(Array.isArray(data)){
            const animals = [];
            for(let i=0;i<data.length;i++){
                const animal = await animalModel.create(data[i]);
                await shelterController.addAnimal(animal.shelter,animal._id);
                animals.push(animal);
            }
            return animals;
        }
        const animal = await animalModel.create(data);
        await shelterController.addAnimal(animal.shelter,animal._id);
        return animal;
    } catch (error) {
        console.error(error); 
        return null;  
    }
}

const update = async(id,data) =>{
    try {
        const animal = await animalModel.findByIdAndUpdate(id,data);
        return animal;
    } catch (error) {
        console.error(error);
        return null;
    }
}

const remove = async(id) =>{
    try {
        const animal = await animalModel.findByIdAndDelete(id);
        await shelterController.removeAnimal(animal.shelter,animal._id);
        return animal;
    } catch (error) {
        console.error(error);
        return null;
    }
}
const addUser = async(animalId,userId) =>{
    try {
        const animal = await getById(animalId);
        if(!animal.users.includes(userId)){
            animal.users.push(userId);
            await animal.save();
            return animal
        }
        return animal;
    } catch (error) {
        return null;
    }
}
const removeUser = async(animalId,userId)=>{
    try {
        const animal = await getById(animalId);
        if(animal.users.includes(userId)){
            animal.users = animal.users.filter(u=> u!==userId);
            await animal.save();
            return animal
        }
        return animal;
    } catch (error) {
        return null;
    }
}
export const functions = {
    getAll,
    getById,
    create,
    update,
    remove,
    addUser,
    removeUser,
}

export default functions;