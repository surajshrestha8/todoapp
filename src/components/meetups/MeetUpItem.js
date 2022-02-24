import classes from "./MeetUpItem.module.css";
import Card from "../ui/Card";
import { useContext } from "react";
import FavouritesContext from "../../store/favourites-context";

const MeetUpItem = (props)=>{
    const favouritesctx = useContext(FavouritesContext);
    console.log(favouritesctx);
    const isFavourite = favouritesctx.isFavourites(props.id);
    const toggleFavouriteHandler =()=>{
        if(isFavourite){
            favouritesctx.removeFavourites(props.id)
        }
        else{
            favouritesctx.addFavourites({
                id:props.id,
                title:props.title,
                address:props.address,
                image:props.image,
                description:props.description,
            });
        }
    }

    return(
        <>
            <li className={classes.item}>
                <Card>               
                <div className={classes.image}>
                    <img src = {props.image} alt=""/>
                </div>

                <div className={classes.content}>
                        <h3>{props.title}</h3>
                        <address>{props.address}</address>
                        <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavouriteHandler}>{isFavourite?"Remove favourite":"To favourite"}</button>
                </div>
                </Card>
            </li>
        </>
    )
}

export default MeetUpItem