import shelterController from "./shelterController.js";

const getAll = async(req,res)=>{
    const shelters = await shelterController.getAll();
    res.json({data:shelters});
}

const getById = async (req,res) =>{
    const id = req.params.id
    const shelter = await shelterController.getById(id);
    res.json({data:shelter});
}



const create = async(req,res)=>{
    const shelter = await shelterController.create(req.body);
    res.json({data:shelter})
}

const update = async(req,res)=>{
    const id =req.params.id;
    const shelter = await shelterController.update(id,req.body);
    res.json({data:shelter})
}

const remove = async(req,res)=>{
    const id= req.params.id;
    const shelter = await shelterController.remove(id);
    res.json({data:shelter})
}

const addUser = async(req,res)=>{
    const shelterId = req.params.id;
    const userId = req.body.userId;
    const shelter = await shelterController.addUser(shelterId,userId);
    res.json({data:shelter})
}

const removeUser = async(req,res)=>{
    const shelterId = req.params.id;
    const userId = req.params.userId;
    const shelter = await shelterController.removeUser(shelterId,userId);
    res.json({data:shelter})
}


export default{
    getAll,
    getById,
    create,
    update,
    remove,
    addUser,
    removeUser,
}

