import { createContext } from "react";
import axios from 'axios'
import { useState } from "react";
import { useEffect } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {

    const currency = '₹';
    const backendUrl = import.meta.env.VITE_BACK_URL;
    const [tailors, setTailors] = useState([])
    const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : false)
    const [userdata, setUserdata] = useState(false)

    const getTailorsData = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/tailor/list')
            if (data.success) {
                setTailors(data.tailors)
            } else {
                console.log(data.message);
            }
        } catch (error) {
            console.log("error in fetching data");
            console.log(error.message);

        }

    }

    const loadUserProfile = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/user/get-profile', { headers: { token } })
           
            if (data.success) {
                console.log("success");
                setUserdata(data.userdata)
            } else {
                console.log('failed to load user profile');
                
                console.log(data.message);
            }
        } catch (error) {
            console.log("error in fetching user profile");
            console.log(error.message);
        }
    }

    useEffect(() => {
        getTailorsData()
    }, [])

    useEffect(() => {
        if (token) {
            loadUserProfile()
        } else {
            setUserdata(false)
        }
    }, [token])

    const value = {
        tailors, currency,
        token, setToken,
        backendUrl, 
        userdata, setUserdata,
        loadUserProfile, 
        getTailorsData,
    }


    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )

}

export default AppContextProvider