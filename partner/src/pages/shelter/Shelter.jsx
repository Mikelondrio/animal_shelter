
import "./Shelter.css";

const Shelter = ({shelter})=>{


    return (
        <article className="shelter-card">
            <h2>{shelter.shelter_name}</h2>
            <p>{shelter.shelter_location}</p>
            <p>{shelter.shelter_size}</p>

        </article>
    )
}

export default Shelter;