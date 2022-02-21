import axios from "axios";
import { useState,useEffect } from "react";
import { Card ,Input ,Row,Col,Divider } from "antd";
import WeatherDescription from "./weatherDescription";




const Weather = ()=>{

    const [weather,setWeather] = useState("");
    const [search,setSearch]= useState("");
    const [error,setError] =useState("");
    const url = `https://api.weatherapi.com/v1/current.json?key=6f7ce70a7d9948f2ab1100632221401&q=${search}&aqi=no`
    
    useEffect(()=>{
    
            axios.get(url)
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
            <h1>Weather App</h1>
            <Divider/>
                {
                    weather ? <h2>{weather.location.name}</h2>
                    :
                    <h2>Search City</h2>  
                }
            <Row>
                <Col span={8}></Col>
                
                <Col span={8}>
                    <Input name="city" type="text" placeholder="Enter the name of a city" onChange = {(e)=>setSearch(e.target.value)}/>
                </Col>
                
                <Col span={8}></Col>
            </Row>
            <Divider/>
            <Row> 

                <Col span={8}></Col>
                
                <Col span={8}>
                    {   
                        weather?
                        <WeatherDescription weather={weather}/>
                        : error === "Parameter q is missing." ? <Card title="No matching location found." color="red"></Card>
                        : <Card title={error} color="red"></Card>     
                    }
                </Col>
                
                <Col span={8}> </Col>
            </Row>       
        </>
    )
}

export default Weather;