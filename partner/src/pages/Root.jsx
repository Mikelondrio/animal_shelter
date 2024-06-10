import "../App.css";
import { Outlet, Link,useNavigate } from "react-router-dom";
import { getToken } from "../utils/local";
import { useEffect,useContext } from "react";
import UserContext from "../context/userContext";
import { getUserData } from "../utils/fetch";
const Root = () => {
    const {user,setUser} = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!getToken()) {
            navigate("/register");
        }
        fetchUserData();
    }, []);

    async function fetchUserData() {
        const data  = await getUserData();
        if(data.error){
            navigate("/register");
        }
        setUser(data.data);
      }
    return (
        <div>
            <nav className="navContainer">
                <ul className="navList">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/animals">Animals</Link>
                    </li>
                    <li>
                        <Link to="/shelters">Shelters</Link>
                    </li>
                    <li>
                        <Link to="/fosterhome">Foster Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About us</Link>
                    </li>
                    <li>
                        <Link to="/register">Register/Login</Link>
                    </li>
                    <li><h1 className="navUser">Welcome: {user?.user_name}</h1></li>
                </ul>
                
            </nav>
            
            <Outlet />
        </div>
    )
};

export default Root;