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
    },
    animals:[{
        type: mongoose.Schema.ObjectId,
            ref: 'animal'
    }]
})

const shelterModel = mongoose.model("shelter", shelterSchema);

export default shelterModel;