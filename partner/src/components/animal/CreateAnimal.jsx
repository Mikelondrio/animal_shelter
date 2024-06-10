import { createAnimal } from "../../utils/fetch";
import "./CreateAnimal.css"
const CreateAnimal = ({onCreate})=>{

    const handleSubmit =async (e)=>{
        e.preventDefault();
        const animal_name = e.target.animal_name.value;
        const animal_specie= e.target.animal_specie.value;
        const animal_race= e.target.animal_race.value;
        const animal_sex = e.target.animal_sex.value;
        const animal_disease = e.target.animal_disease.value;
        const animal_vaccine = e.target.animal_vaccine.value;
        const animal_stirilized = e.target.animal_stirilized.value;
        const animal_hospitalization = e.target.animal_hospitalization.value;
        const shelter = e.target.shelter.value;


        const data = {animal_name,animal_specie,animal_race,animal_sex,animal_disease,animal_vaccine,animal_stirilized,animal_hospitalization,shelter};
        console.log("name",data)
        const result = await createAnimal(data);
        console.log("result",result)
        onCreate();
    }
    return (
        <form action="" className="create-animal" onSubmit={handleSubmit}>
            <label htmlFor="animal_name" >Name</label>
            <input type="text" name="name"/>
            <label htmlFor="animal_specie" >Specie</label>
            <input type="text" name="specie"/>
            <label htmlFor="animal_race" >Race</label>
            <input type="text" name="race"/>
            <label htmlFor="animal_sex" >Sex</label>
            <input type="text" name="sex"/>
            <label htmlFor="animal_disease" >Disease</label>
            <input type="text" name="disease"/>
            <label htmlFor="animal_vaccine" >Vaccine</label>
            <input type="text" name="vaccine"/>
            <label htmlFor="animal_stirilized" >Stirilized</label>
            <input type="checkbox" name="stirilized"/>
            <label htmlFor="animal_hospitalization" >Hospitalization</label>
            <input type="checkbox" name="hospitalization"/>
            <label htmlFor="shelter" >Shelter</label>
            <input type="text" name="shelter"/>

            <button type="submit">Create</button>
        </form>
    )
}
export default CreateAnimal;