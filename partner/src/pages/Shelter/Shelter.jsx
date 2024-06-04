import Animal from "./Animal";
import "./Shelter.css";

const Shelter = ({shelter})=>{


    return (
        <article className="shelter-card">
            <h2>{shelter.shelter_name}</h2>
            <p>{shelter.shelter_location}</p>
            <p>{shelter.shelter_size}</p>
            <section className="animals">
            
            </section>

        </article>
    )
}

export default Shelter;