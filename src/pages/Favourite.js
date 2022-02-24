import { useContext } from "react";
import MeetUpList from "../components/meetups/MeetUpList";
import FavouritesContext from "../store/favourites-context";

const Favourite =()=>{
    const favouritesctx = useContext(FavouritesContext);
    console.log(favouritesctx.favourites);
    const data = favouritesctx.favourites;
    return(
        <>
            <h1>Favourite</h1>
            <MeetUpList meetup={data}/>

        </>
    )
}



export default Favourite;