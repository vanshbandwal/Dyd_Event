import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const UserContext = createContext(null);

export default UserContext;
export const UserContextProvider = (props)=>{
    const [service,setservice] = useState([])
    const [review,setreview] = useState([])
    const [servicepage,setservicepage] = useState([])
    const [Gallery,setgallery] = useState([])
    const [reviewPage,setreviewPage] = useState([])
    useEffect(() => {
    const fetchServices = async () => {
        let res = await axios.get('http://dyd-event-vanshbandwals-projects.vercel.app/allservices');
        setservice(res.data.Services);
        let resserv = await axios.get('http://dyd-event-vanshbandwals-projects.vercel.app/allReview');
        setreview(resserv.data.Services);
        let resServicePage = await axios.get('http://dyd-event-vanshbandwals-projects.vercel.app/allServicePage');
        setservicepage(resServicePage.data.Services);
        let resGallery = await axios.get('http://dyd-event-vanshbandwals-projects.vercel.app/allImages');
        setgallery(resGallery.data.Services);
         let resreviewpage = await axios.get('http://dyd-event-vanshbandwals-projects.vercel.app/allReviewpage');
        setreviewPage(resreviewpage.data.Services);
    };

    fetchServices();
  }, []);
    const contextvalue = {service,review,servicepage,Gallery,reviewPage}
    return(
        <UserContext.Provider value={contextvalue}>
            {props.children}
        </UserContext.Provider>
    )
}
