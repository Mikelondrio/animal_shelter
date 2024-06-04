import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [projects,setProjects] = useState([]);
  useEffect(()=>{
    fetchShelters();
  },[]);
  async function fetchShelters(){
    const result = await getShelters();
    console.log("proijects",result);
    setProjects(result.data);
  }
  return (
    <>
      {!isLoggedIn ?
        <Register onLogin={()=>setIsLoggedIn(true)}/>
        :
        <>
          {/* <Project project={projects[0]} /> */}
          <SheltersList shelters={shelters} />
        </>
      }
    </>
  )
}

export default App
