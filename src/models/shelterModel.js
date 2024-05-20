import mongoose from "mongoose";

const shelterSchema = new mongoose.Schema({

    shelter_name : {
        type: String,
        required: true,
        unique: true
    },
    shelter_location : {
        type: String,
        required: true

    },
    shelter_size : {
        type: Number,
        required: true
    }
    
})

const shelterModel = mongoose.model("shelter", shelterSchema);

export default shelterModel;