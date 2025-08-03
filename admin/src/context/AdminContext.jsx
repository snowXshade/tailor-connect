import { createContext, useState } from "react";
import axios from 'axios'
import {toast} from 'react-toastify'

export const AdminContext = createContext()

const AdminContextProvider = (props) => {

    const [atoken, setAtoken] = useState(localStorage.getItem('atoken')? localStorage.getItem('atoken'): '');
    const backendUrl = import.meta.env.VITE_BACK_URL;
    const [tailors, setTailors] = useState([])

    const getAllTailors = async () => {

        try {
            const {data} = await axios.post(backendUrl+'/api/admin/all-tailors', {}, {headers:{atoken}})
            if(data.success) {
                console.log(data.tailors)
                
                setTailors(data.tailors)
            }else{
                toast.error(data.message)
                console.log('error cant fetch tailor even after veryfiyng token');
                
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const changeAvailabiity = async (tailId) => {
        try {
            const {data} = await axios.post(backendUrl+'/api/admin/change-availability',{tailId}, {headers:{atoken}})
            if(data.success){
                toast.success(data.message)
                getAllTailors()
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error('error in fetching')
        }
    }

    const value = {
        atoken,setAtoken,
        backendUrl,tailors,
        getAllTailors, changeAvailabiity,
    }

    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}


export default AdminContextProvider