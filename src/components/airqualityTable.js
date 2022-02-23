import { ListGroup,  } from "react-bootstrap";


const AirQuality = ({weather})=>{
   
    console.log(weather);
    return (
        
        <>
            <ListGroup>
                <ListGroup.Item>
                    <h5>Carbon Monoxide</h5>
                    {(weather.current.air_quality.co).toFixed(2)}
                </ListGroup.Item>
                <ListGroup.Item>
                    <h5>Sulphur dioxiode</h5>
                    {(weather.current.air_quality.so2).toFixed(2)}
                </ListGroup.Item>
                <ListGroup.Item>
                    <h5>Ozone</h5>
                    {weather.current.air_quality.o3.toFixed(2)}
                </ListGroup.Item>
                <ListGroup.Item>
                    <h5>Nitrogen dioxide</h5>
                    {weather.current.air_quality.no2.toFixed(2)}
                </ListGroup.Item>
              
            </ListGroup>
            
        

        </>
    )
}


export default AirQuality;