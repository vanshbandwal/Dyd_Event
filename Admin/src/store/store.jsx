import axios from "axios";
import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";


export const Admincontext = createContext(null)
const AdmincontextProvider = (props)=>{
    const [fetchservice,setfetchservice] = useState([])
    const [fetchReview,setfetchReview] = useState([])
    const [fetchServicePage,setfetchServicePage] = useState([])
    const [fetchImage,setfetchImage] = useState([])
    const [fetchReviewPage,setfetchfetchReviewPage] = useState([])
    const [fetchClient,setfetchClient] = useState([])
    const getservice = async()=>{
        let resService = await axios.get('http://dyd-event-vanshbandwals-projects.vercel.app/allservices')
        setfetchservice(resService.data.Services)
        let resReview = await axios.get('http://dyd-event-vanshbandwals-projects.vercel.app/allReview')
        setfetchReview(resReview.data.Services)
        let resServicePage = await axios.get('http://dyd-event-vanshbandwals-projects.vercel.app/allServicePage')
        setfetchServicePage(resServicePage.data.Services)
        let resReviewpage = await axios.get('http://dyd-event-vanshbandwals-projects.vercel.app/allReviewpage')
        setfetchfetchReviewPage(resReviewpage.data.Services)
        let resImages = await axios.get('http://dyd-event-vanshbandwals-projects.vercel.app/allImages')
        setfetchImage(resImages.data.Services)
        let resClient = await axios.get('http://dyd-event-vanshbandwals-projects.vercel.app/allClient')
        setfetchClient(resClient.data.Services)
    }
    useEffect(()=>{
        getservice();  
    },[fetchservice])
    const contextvalue = {fetchservice,getservice,fetchReview,fetchServicePage,fetchImage,fetchReviewPage,fetchClient}
    return(
    <Admincontext.Provider value={contextvalue}>
        {props.children}
    </Admincontext.Provider>

)
}
export default AdmincontextProvider;
