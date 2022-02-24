import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useContext } from "react";
import FavouritesContext from "../../store/favourites-context";

const MainNavigation = ()=>{
    const favouritectx = useContext(FavouritesContext);
    return (
        <>
            <header className={classes.header}>
                <div className={classes.logo}>React Meetups</div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">All meetup</Link>
                        </li>
                        <li>
                            <Link to="/newmeetup">New meet up</Link>
                        </li>
                        <li>
                            <Link to="/favourites">
                                Favourites
                                <span className={classes.badge}>{favouritectx.totalFavourites}</span>
                            </Link>
                        </li>
                       
                    </ul>
                </nav>
            </header>


        </>
    )
}


export default MainNavigation;