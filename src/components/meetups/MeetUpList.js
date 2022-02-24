import MeetUpItem from "./MeetUpItem"
import classes from "./MeetUpList.module.css";


const MeetUpList = (props)=>{
    return(
        <>
            <ul className={classes.list}>
                {
                    props.meetup.map(meetup=> <MeetUpItem 
                                                  key={meetup.id} 
                                                  id={meetup.id} 
                                                  title={meetup.title} 
                                                  description= {meetup.description}
                                                  image = {meetup.image}
                                                />)
                }
            </ul>

        </>
    )
}

export default MeetUpList;