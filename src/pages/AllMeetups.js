import { useEffect, useState } from "react";
import MeetUpList from "../components/meetups/MeetUpList";
import axios from "axios";


const Allmeetup = ()=>{

    const [data,setData] = useState([]);


  useEffect(()=>{
    axios.get("https://meetupproject-7c9ac-default-rtdb.firebaseio.com/meetup.json")
    .then(function(response){
      console.log(response.data);
      const newData = response.data;
     
      console.log(newData);
      const meetups = [];
      for(const key in newData){
        const meetup = {
          id:key,
          ...newData[key]
        }
        console.log(meetup);
        meetups.push(meetup);
      }
      console.log(meetups);
      setData(meetups);


    })
    .catch(function(error){
      console.log(error);
    })
    },[]);
   

    return(
        <>
        <h1>All meet up</h1>
            <section>
               <MeetUpList meetup = {data}/>
            </section>
            
        </>
    )
}



export default Allmeetup