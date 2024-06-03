import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    user_email : {
        type: String,
        required: true,
        unique: true
    },
    user_name : {
        type: String,
        required: true,
        unique: true
    },
    user_password : {
        type: String,
        required: true
    },
    user_city : {
        type: String
    },
    user_rol :{
        type: String,
        enum: ['user','admin'],
        default: "user"

    }
})

const userModel = mongoose.model("user", userSchema);

export default userModel;