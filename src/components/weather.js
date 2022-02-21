import axios from "axios";
import { useState,useEffect } from "react";
import { Card ,Input ,Row,Col,Divider,Descriptions,Image} from "antd";




const Weather = ()=>{

    const [weather,setWeather] = useState("");
    const [search,setSearch]= useState("");
    const [error,setError] =useState("No data");
    console.log(search);
    const url = `http://api.weatherapi.com/v1/current.json?key=6f7ce70a7d9948f2ab1100632221401&q=${search}&aqi=no`
    
    useEffect(()=>{
        axios.get(url)
        .then(function(response){
            setWeather(response.data);
            setError("");
        })
        .catch(function(error){
            console.log(error);
            setError("No data found");
            
            setWeather("");
        })

    },[search]);


console.log(weather);

    return(
        <>
            <h1>Weather App</h1>
            <Divider/>
            
                {
                    weather ? <h2>{weather.location.name}</h2>
                    :
                    <h2>Search City</h2>
                }

            <Row>
                
                <Col span={8}>
           

                </Col>
                <Col span={8}>
                <Input name="city" type="text" placeholder="Enter the name of a city" onChange = {(e)=>setSearch(e.target.value)}/>
                </Col>
                <Col span={8}>

                </Col>

            </Row>
            <Divider/>
            <Row>
                
                <Col span={8}>
           

                </Col>
                <Col span={8}>
                    {   
                        error?
                        <Card title="No data found">
                        </Card>

                        :
                        <> 
                        <Descriptions column={1} title={weather.location.country}> 
                            <Descriptions.Item label="Conditions">{weather.current.condition.text}</Descriptions.Item>
                            <Descriptions.Item label="Temperature(In Celsius)">{weather.current.temp_c}</Descriptions.Item>
                            <Descriptions.Item label="Humidity">{weather.current.humidity}</Descriptions.Item>
                            <Descriptions.Item label="Wind">{weather.current.wind_kph}  <p>km/h</p> </Descriptions.Item>
                        </Descriptions>
                        <Image src={weather.current.condition.icon}></Image>  
                        
                    
                       
                      
                
                        </>
                       
                    }
               
          
           
                </Col>
                <Col span={8}>

                </Col>

            </Row>
         
        
            
        </>
    )
}




export default Weather;