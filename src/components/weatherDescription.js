import { ListGroup,Image,Table } from "react-bootstrap";


const WeatherDescription = ({weather})=>{
   
   
    return(

        <>
            <ListGroup>
                <ListGroup.Item>
                    <h5>Conditions</h5>
                    {weather.current.condition.text}
                    
                </ListGroup.Item>
                <ListGroup.Item>
                    <h5>Temperature:(In Celsius)</h5>
                    {weather.current.temp_c}

                </ListGroup.Item>
                <ListGroup.Item>
                    <h5>Wind:(Kph)</h5>
                    {weather.current.wind_kph}
                </ListGroup.Item>
                <ListGroup.Item>
                    
                    <Image src={weather.current.condition.icon}/>
                </ListGroup.Item>
            </ListGroup>
        
        </>
       
    )
}

export default WeatherDescription;