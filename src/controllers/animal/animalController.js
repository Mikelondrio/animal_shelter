import animalModel from "../../models/animalModel.js";

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
        const animal = await animalModel.create(data);
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