import { getToken } from "./local";

const API_URL = import.meta.env.VITE_BACKEND_URL

const fetchData = async(route,method,inputData=null)=>{
    const url = new URL(API_URL + route);
    const fetchOptions = {
        method:method,
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${getToken()}`
        }
    }
    if(inputData){
        if(method === "get"){
            Object.keys(inputData).forEach(key=>{
                url.searchParams.append(key,inputData[key]);
            })
        }
        else if(method === "post" || method === "put" || method === "patch"){
            fetchOptions.body = JSON.stringify(inputData);
        }
    }
    try {
        const result = await fetch(url.toString(),fetchOptions);
        console.log("register",result)
        const data  = await result.json();
        return data;
    } catch (error) {
        console.error(error);
        return ({error:error.message})
    }
}

const register = async(userData)=>{
    const result = await fetchData("/register","post",userData);
    
    return result;
}
const login = async(userData)=>{
    const result = await fetchData("/login","post",userData);
    console.log("login",result);
    return result;
}
const getUserData = async()=>{
    const result = await fetchData("/user/bytoken","get");
    return result;
}
const getShelters = async()=>{
    const result = await fetchData("/shelters","get");
    return result;
}
const getShelter = async(id)=>{
    const result = await fetchData("/shelters/"+id,"get");
    return result;
}
const createShelter = async(shelterData)=>{
    const result = await fetchData("/shelters","post",shelterData);
    return result;
}
const getAnimals = async()=>{
    const result = await fetchData("/animals","get");
    return result;
}
const getAnimalsByShelter = async(shelterid)=>{
    const result = await fetchData("/animals/byshelter/"+shelterid,"get");
    return result;
}
const getAnimal = async(id)=>{
    const result = await fetchData("/animals/"+id,"get");
    return result;
}
const createAnimal = async(animalData)=>{
    const result = await fetchData("/animals","post",animalData);
    return result;
}

export {
    register,
    login,
    getShelters,
    getShelter,
    createShelter,
    getUserData,
    getAnimals,
    getAnimal,
    createAnimal,
    getAnimalsByShelter 
}