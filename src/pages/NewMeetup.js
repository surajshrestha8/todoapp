import { Navigate ,useNavigate } from "react-router-dom"
import NewMeetupForm from "../components/meetups/NewMeetUpForm"
import axios from "axios";

const Newmeetup = () =>{
    const navigate = useNavigate();
    const onMeetup=(data)=>{
        console.log(data);
        axios.post("https://meetupproject-7c9ac-default-rtdb.firebaseio.com/meetup.json",data)
        .then(function(response){
            console.log(response);
            navigate("/");
        })
        .catch(function(error){
            console.log(error);
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