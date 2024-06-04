import { useState } from "react";
import Modal from "../../components/modal/Modal";
import CreateShelter from "../../components/shelter/CreateShelter";
const ShelterList=({shelters})=>{
    const [creatingShelter,setCreatingShelter] = useState(false);
    const sheltersHtml = shelters.map(shelter=>{
        return
        (
            <article className="shelter-list-element" key={shelter._id}>
                <h2>{shelter.shelter_name}</h2>
                <p>{shelter.shelter_location}</p>
                <p>{shelter.shelter_size}</p>
            </article>
        )
    })
return (
    <>
    {creatingShelter ?
        <Modal onClose={()=>setCreatingShelter(false)}>
            <CreateShelter onCreate={()=>setCreatingShelter(false)}/>
        </Modal>
        :
        <button onClick={()=>setCreatingShelter(true)}>New Shelter</button>
    }
        <section className="shelter-list">
            {sheltersHtml}
        </section>
    </>

)
    
}

export default ShelterList