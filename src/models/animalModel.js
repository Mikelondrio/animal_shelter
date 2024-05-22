import mongoose from "mongoose";

const animalSchema = new mongoose.Schema({
    animal_specie : {
        type: String,
        required: true,
        unique: true
    },
    animal_race : {
        type: String,

    },
    animal_sex : {
        type: String,
        required: true
        
    },
    animal_disease : {
        type: String

    },
    animal_vaccine :{
        type: String,
    

    },
    animal_stirilized :{
        type: Boolean,
        default: false

    },
    animal_hospitalization :{
        type: Boolean,
        default: false

    },
    shelter:{
        type: mongoose.Schema.ObjectId,
            ref: 'shelters',
            required: true
    }
})

const animalModel = mongoose.model("animal", animalSchema);

export default animalModel;