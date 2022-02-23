import axios from "axios";
import { useState,useEffect } from "react";
import { CURRENT_URL } from "../CONSTANTS/constants";
import { Button,Form ,Container,Row,Col,Alert, Badge} from "react-bootstrap";
import WeatherDescription from "./weatherDescription";
import AirQuality from "./airqualityTable";
import Airindex from "./airIndex";


const Weather = ()=>{

    const [weather,setWeather] = useState("");
    const [search,setSearch]= useState("");
    const [error,setError] =useState("");
  

    
    useEffect(()=>{
            axios.get(CURRENT_URL,{
          
                params:{
                    key : process.env.REACT_APP_API_KEY,
                    q : search,
                    aqi : "yes",                 
                }
            })
            .then(function(response){
                setWeather(response.data);
                setError("");
            })
            .catch(function(error){
                setError(error.response.data.error.message); 
                setWeather("");
            })
    
        },[search]);
    
    return(
        <>
            <Container>
                <h1 style={{marginTop:"20px"}}>
                  <Badge bg="success">Weather App</Badge>
                </h1>
         
                    <Container>
                        {
                            weather ? <h2>{weather.location.name}</h2>
                            :
                            <h2>Search City</h2>  
                        }
                        <Row>
                            <Col></Col>
                            <Col>
                                <Form.Group className="mb-3">      
                                    <Form.Control 
                                      type="text" 
                                      value={search} 
                                      placeholder="Enter a city" 
                                      onChange={(e)=>setSearch(e.target.value)} 
                                    />
                                </Form.Group>
                            </Col>
                            <Col></Col>
                        </Row>
                            {
                                weather?
                                <>
                                    <Row>
                                        <Col>
                                            <AirQuality weather = {weather}/>
                                        </Col>
                                        <Col>
                                            <WeatherDescription weather={weather}/>
                                            <br/>
                                            <div className="d-grid gap-2">
                                                <Button variant="outline-primary" size="lg" onClick={()=>setSearch("")}>Clear</Button>
                                            </div>
                                        </Col>
                                    <Col>
                                        <Airindex weather={weather}/>
                                        <Badge bg="info">Last updated at: {weather.current.last_updated}</Badge>
                                    </Col>
                                    </Row>   
                                </>
                                :
                                  error==="Parameter q is missing." ?
                                    <>
                                        <Row>
                                            <Col></Col>
                                            <Col>
                                              <Alert variant="danger">No matching location found.</Alert>
                                            </Col>
                                            <Col></Col>
                                        </Row>
                                    </>
                                    
                                :
                                    <>
                                        <Row>
                                            <Col></Col>
                                            <Col> 
                                              <Alert variant="danger">{error}</Alert>
                                            </Col>
                                            <Col></Col>
                                        </Row>
                                    </>        
                            }
                    </Container>
            </Container>     
        </>
    )
}

export default Weather;