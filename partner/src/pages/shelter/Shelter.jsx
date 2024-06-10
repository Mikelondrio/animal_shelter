
import { useLoaderData } from "react-router-dom";
import "./Shelter.css";

const Shelter = () => {
    const shelter = useLoaderData();
    console.log('shelter', shelter);

    return (
        <article className="shelter-card">
            <h2 className="shelterName">{shelter.shelter_name}</h2>
          
            <h2>Animals in this Shelter</h2>
            <div className="animal-cards">
                {shelter.animals && shelter.animals.length > 0 ? (
                    shelter.animals.map(animal => (
                        <div className="animal-card" key={animal._id}>
                            <h2>{animal.animal_name}</h2>
                            <p>{animal.animal_specie}</p>
                            <p>{animal.animal_sex}</p>
                        </div>
                    ))
                ) : (
                    <p>No animals found for this shelter.</p>
                )}
            </div>
        </article>
    );
}

export default Shelter;