import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Modal from "../../components/modal/Modal";
import CreateAnimal from "../../components/animal/CreateAnimal";

const AnimalsList = () => {
    const [animals,setAnimals] = useState(useLoaderData());
    const [creatingAnimal,setCreatingAnimal] = useState(false);
    const animalsHtml = animals.map(animal => 
        
        (
            <article className="animal-list-element" key={animal._id}>
                <h2>{animal.animal_name}</h2>
                <p>{animal.animal_specie}</p>
                <p>{animal.animal_sex} </p>
              
            </article>
            
        )
    )
    return (
        <>
        <h1>These are our friends</h1>
        
            <section className="animal-list">
                {animalsHtml}
            </section>
            {creatingAnimal ?
            <Modal onClose={()=>setCreatingAnimal(false)}>
                <CreateAnimal onCreate={()=>setCreatingAnimal(false)}/>
            </Modal>
            :
            <button onClick={()=>setCreatingAnimal(true)}>New Animal</button>
        }
        </>
    )
}

export default AnimalsList