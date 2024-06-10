import { createShelter } from "../../utils/fetch";
import "./CreateShelter.css"
const CreateShelter = ({onCreate})=>{

    const handleSubmit =async (e)=>{
        e.preventDefault();
        const shelter_name = e.target.shelter_name.value;
        const shelter_location= e.target.shelter_location.value;
        const shelter_size = e.target.shelter_size.value;
        const shelter_latitude = e.target.shelter_latitude.value;
        const shelter_longitude = e.target.shelter_longitude.value;

        const data = {shelter_name,shelter_location,shelter_size,shelter_latitude,shelter_longitude};
        console.log("name",data)
        const result = await createShelter(data);
        console.log("result",result)
        onCreate();
    }
    return (
        <form action="" className="create-shelter" onSubmit={handleSubmit}>
            <label htmlFor="shelter_name" >Name</label>
            <input type="text" name="name"/>
            <label htmlFor="shelter_location" >Location</label>
            <textarea name="location"></textarea>
            <label htmlFor="shelter_size" >Size</label>
            <input type="number" name="size"/>
            <label htmlFor="shelter_latitude" >Latitude</label>
            <input type="number" name="latitude"/>
            <label htmlFor="shelter_longitude" >Longitude</label>
            <input type="number" name="longitude"/>
            <button type="submit">Create</button>
        </form>
    )
}
export default CreateShelter;