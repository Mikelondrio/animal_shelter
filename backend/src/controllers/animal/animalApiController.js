import animalController from "./animalController.js";

const getAll = async(req,res)=>{
    const animalId = req.query.animalId;
    const animals = await animalController.getAll(animalId);
    res.json({data:animals});
}

const getAnimalsByShelter = async (req, res) => {
    const shelterId = req.params.shelterid;
    const animalsInShelter = await animalController.getAnimalsByShelter(shelterId);
    res.json({ data: animalsInShelter });
};


const getById = async (req,res) =>{
    const id = req.params.id
    const animal = await animalController.getById(id);
    res.json({data:animal});
}


const create = async(req,res)=>{
    const animal = await animalController.create(req.body);
    res.json({data:animal})
}

const update = async(req,res)=>{
    const id =req.params.id;
    const animal = await animalController.update(id,req.body);
    res.json({data:animal})
}
const changeStatus = async(req,res)=>{
    const id = req.params.id
    const status = req.body.status;
    const animal  = await animalController.changeStatus(id,status);
    res.json({data:animal})
}
const remove = async(req,res)=>{
    const id= req.params.id;
    const animal = await animalController.remove(id);
    res.json({data:animal})
}

const addUser = async(req,res)=>{
    const animalId = req.params.id;
    const userId = req.body.userId;
    const animal = await animalController.addUser(animalId,userId);
    res.json({data:animal})
}

const removeUser = async(req,res)=>{
    const animalId = req.params.id;
    const userId = req.params.userId;
    const animal = await animalController.removeUser(animalId,userId);
    res.json({data:animal})
}


export default{
    getAll,
    getById,
    create,
    update,
    changeStatus,
    remove,
    addUser,
    removeUser,
    getAnimalsByShelter
}
