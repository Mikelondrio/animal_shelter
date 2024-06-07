import {createBrowserRouter,redirect} from "react-router-dom";
import { getShelters,getShelter, getAnimals, getAnimalsByShelter } from "./utils/fetch";
import Root from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import Register from "./pages/register/Register";
import SheltersList from "./pages/shelter/ShelterList";
import Shelter from "./pages/shelter/Shelter";
import AnimalsList from "./pages/animal/AnimalList";
import Animal from "./pages/animal/Animal";
import AboutUs from "./pages/aboutus/AboutUs";
import FosterHome from "./pages/fosterhome/FosterHome";


async function fetchShelters(){
    const result = await getShelters();
    if(result.error){
        return redirect("/register");
    }
    return result.data;
}
async function fetchShelter(id){
    const result = await getShelter(id);
    if(result.error){
        return redirect("/register");
    }
    return result.data;
}
async function fetchAnimals(){
    const result = await getAnimals();
    if(result.error){
        return redirect("/register");
    }
    return result.data;
}
async function fetchAnimal(id){
    const result = await getAnimals(id);
    if(result.error){
        return redirect("/register");
    }
    return result.data;
}


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
            path: "/",
            element: <h2>Welcome to yours and our ZooMundus</h2>
        },
        {
            path: "/shelters",
            element: <SheltersList />,
            loader: () => fetchShelters()
        },
        {
            path: "/animals",
            element: <AnimalsList />,
            loader: () => fetchAnimals()
        },
        {
            path: "/about",
            element: <AboutUs/>

        },
        {
            path: "/fosterhome",
            element: <FosterHome/>
        },
        {
            path: "/shelters/:id",
            element: <Shelter />,
            loader: ({params}) => fetchShelter(params.id)
        },
        {
            path: "/animals/:id",
            element: <Animal />,
            loader: ({params}) => fetchAnimal(params.id)
        },
      ]
    },
    {
        path: "/register",
        element: <Register />
    }
    
  ]);

export default router;