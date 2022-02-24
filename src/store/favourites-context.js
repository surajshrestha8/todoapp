import { createContext, useState } from "react";

const FavouritesContext  = createContext({
    favourites :[],
    totalFavourites : 0,
    addFavourites :(favouriteMeetUp)=>{},
    removeFavourites:(meetUpId)=>{},
    isFavourites:(meetUpId)=>{},

});


export const FavouritesContextProvider = (props)=>{
    const [userFavourites,setUserFavourites] = useState([]);

    const addFavouriteHandler = (favouriteMeetUp)=>{
        setUserFavourites(prevUserFavourites=>{
            return prevUserFavourites.concat(favouriteMeetUp);
        })

    }

    const removefavouriteHandler = (meetUpId)=>{
        setUserFavourites(prevUserFavourites=>{
            return prevUserFavourites.filter(meetup=>(meetup.id!==meetUpId));
        })

    }
    const isFavouriteHandler = (meetUpId)=>{
        return userFavourites.some(meetup=>meetup.id===meetUpId);

    }

    const context = {
            favourites : userFavourites,
            totalFavourites : userFavourites.length,
            addFavourites: addFavouriteHandler,
            removeFavourites: removefavouriteHandler,
            isFavourites :isFavouriteHandler,


    }

    return  <FavouritesContext.Provider value={context}>
            {props.children}

           </FavouritesContext.Provider>
}

export default FavouritesContext