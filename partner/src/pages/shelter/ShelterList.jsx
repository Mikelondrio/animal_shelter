import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Modal from "../../components/modal/Modal";
import CreateShelter from "../../components/shelter/CreateShelter";

const SheltersList = () => {
    const [shelters,setShelters] = useState(useLoaderData());
    const [creatingShelter,setCreatingShelter] = useState(false);
    const sheltersHtml = shelters.map(shelter => 
        
        (
            <article className="shelter-list-element" key={shelter._id}>
                <h2>{shelter.shelter_name}</h2>
                <p>{shelter.shelter_location}</p>
                <p>{shelter.shelter_size} m²</p>
                <Link to={`/shelters/${shelter._id}`}>View</Link>
            </article>
            
        )
    )
    return (
        <>
        <h1>These are our partners</h1>
        
            <section className="shleter-list">
                {sheltersHtml}
            </section>
            {creatingShelter ?
            <Modal onClose={()=>setCreatingShelter(false)}>
                <CreateShelter onCreate={()=>setCreatingShelter(false)}/>
            </Modal>
            :
            <button onClick={()=>setCreatingShelter(true)}>New Shelter</button>
        }
        </>
    )
}

export default SheltersList