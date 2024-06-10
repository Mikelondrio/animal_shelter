
import "./Animal.css";

const Animal = ({animal})=>{


    return (
        <article className="animal-card">
            <h2>{animal.animal_name}</h2>
            <p>{animal.animal_specie}</p>
            <p>{animal.animal_sex}</p>

        </article>
    )
}

export default Animal;