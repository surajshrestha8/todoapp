import { Navigate ,useNavigate } from "react-router-dom"
import NewMeetupForm from "../components/meetups/NewMeetUpForm"

const Newmeetup = () =>{
    const navigate = useNavigate();
    const onMeetup=(data)=>{
        console.log(data);
        fetch("https://meetupproject-7c9ac-default-rtdb.firebaseio.com/meetup.json",
        {
            method:"POST",
            body:JSON.stringify(data),
            headers:{
                "Content-Type":"application/json",
            },

        })
        .then(()=>{
            navigate("/");
        })
    }
    return(
        <>
            <h1>New Meet up</h1>
            <NewMeetupForm onMeetup={onMeetup}/>
        </>
    )
}
export default Newmeetup