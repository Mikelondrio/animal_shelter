import connectDB from "../src/config/mongo.js"
import userModel from "../src/models/userModel"


const userData = {
    user_email: '',
    user_name: '',
    user_password: '',
    user_city: '',
    user_rol: ''
}

describe("Test de modelo de usuario", ()=>{
    beforeAll(()=>{
        userModel.collection.drop();
    })
    afterALL(async ()=>{
        await mongoose.connection.close();
    })
    test("añadir registro",async()=>{
        const newModel =await userModel.create(userData);
        expect(newModel.user_email).toEqual(userData.user_email);
        expect(newModel.user_name).toEqual(userData.user_name);
        expect(newModel.user_password).toEqual(userData.user_password);
        expect(newModel.user_city).toEqual(userData.user_city);
        expect(newModel.user_rol).toEqual(userData.user_rol);
    })
    test("añadir registro",async()=>{
        const newUser =await userModel.findOne({user_email:userData.user_email});
        expect(newUser).not.toBeNull();
        expect(newUser.user_email).toEqual(userData.user_email);
        expect(newUser.user_name).toEqual(userData.user_name);
        expect(newUser.user_password).toEqual(userData.user_password);
        expect(newUser.user_city).toEqual(userData.user_city);
        expect(newUser.user_rol).toEqual(userData.user_rol);
    })
})