
import { Descriptions,Image } from "antd";


const WeatherDescription = (weather)=>{
   
    return(
        <>
            <Descriptions  column={1} title={weather.weather.location.country}> 
              <Descriptions.Item label="Conditions">{weather.weather.current.condition.text}</Descriptions.Item>
              <Descriptions.Item label="Temperature(In Celsius)">{weather.weather.current.temp_c}</Descriptions.Item>
              <Descriptions.Item label="Humidity">{weather.weather.current.humidity}</Descriptions.Item>
              <Descriptions.Item label="Wind">{weather.weather.current.wind_kph}  <p>km/h</p> </Descriptions.Item>
            </Descriptions>
            <Image src={weather.weather.current.condition.icon}></Image> 
        </>
    )
}

export default WeatherDescription;