import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewMeetUpForm.module.css";

const NewMeetupForm = (props)=>{

    const titleHandler = useRef();
    const addressHandler = useRef();
    const imageHandler = useRef();
    const descriptonHandler = useRef();
    
    
    const submitMeetUp= (e)=>{
        e.preventDefault();
        const enteredTitle = titleHandler.current.value;
        const enteredImage = imageHandler.current.value;
        const enteredAddress = addressHandler.current.value;
        const enteredDescription = descriptonHandler.current.value;
        
        const meetupdata = {
            title: enteredTitle,
            address : enteredAddress,
            image : enteredImage,
            description : enteredDescription,
        }

        props.onMeetup(meetupdata);
      
        


    }
    return(
        <>
        <Card>
            <form className={classes.form} onSubmit={submitMeetUp}>
                <div className={classes.control}>
                    <label htmlFor="title">
                        Meet Up title
                    </label>
                    <input type="text" required id= "title" ref={titleHandler}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">
                        Meetup Image
                    </label>
                    <input type="url" required id= "image" ref={imageHandler}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="address">
                        Address
                    </label>
                    <input type="text" required id= "address" ref={addressHandler}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">
                        Description
                    </label>
                    <textarea required id= "description" rows={5} ref={descriptonHandler}/>
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
        </>
    )
}


export default NewMeetupForm;