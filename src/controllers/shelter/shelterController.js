import shelterModel from "../../models/shelterModel.js";


const getAll = async()=> {
    try {
        const shelters = await shelterModel.find();
        return shelters;
    } catch (error) {
        console.error(error);
        return [];
    }
}
const getById = async(id) =>{
    try {
        const shelter = await shelterModel.findById(id);
        if(!shelter){
            return null;
        }
        await shelter.populate("animals");
        return shelter;
    } catch (error) {
        console.error(error);
        return null;
        
    }
}

const create = async(data) =>{
    try {
        const shelter = await shelterModel.create(data);
        return shelter;
    } catch (error) {
        console.error(error); 
        return null;  
    }
}

const update = async(id,data) =>{
    try {
        const shelter = await shelterModel.findByIdAndUpdate(id,data);
        return shelter;
    } catch (error) {
        console.error(error);
        return null;
    }
}

const remove = async(id) =>{
    try {
        const shelter = await shelterModel.findByIdAndDelete(id);
        return shelter;
    } catch (error) {
        console.error(error);
        return null;
    }
}
const addUser = async(shelterId,userId) =>{
    try {
        const shelter = await getById(shelterId);
        if(!shelter.users.includes(userId)){
            shelter.users.push(userId);
            await shelter.save();
            return shelter
        }
        return shelter;
    } catch (error) {
        return null;
    }
}
const removeUser = async(shelterId,userId)=>{
    try {
        const shelter = await getById(shelterId);
        if(shelter.users.includes(userId)){
            shelter.users = shelter.users.filter(u=> u!==userId);
            await shelter.save();
            return shelter
        }
        return shelter;
    } catch (error) {
        return null;
    }
}
const addAnimal = async(shelterId,animalId) =>{
    try {
        const shelter = await getById(shelterId);
        if(!shelter.animals.includes(animalId)){
            shelter.animals.push(animalId);
            await shelter.save();
            console.log("muestrame el shelter", shelter);
            return shelter
        }
        return shelter;
    } catch (error) {
        return null;
    }
}
const removeAnimal = async(shelterId,animalId)=>{
    try {
        const shelter = await getById(shelterId);
        if(shelter.animals.includes(animalId)){
            shelter.animals = shelter.animals.filter(u=> u!==animalId);
            await shelter.save();
            return shelter
        }
        return shelter;
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
    addAnimal,
    removeAnimal
}

export default functions;