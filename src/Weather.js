import React, {useState} from 'react'
import { Container,Row,Col } from "reactstrap";
import './App.css';
 import axios from 'axios';

 
 const Weather=()=>{
  const [temperature, setTemperature] = useState("");
  const [desc, setDesc] = useState("");
  const [icon, setIcon] = useState("");
  const [city, setCity] = useState("");
   
  const getWeatherData = (city,country) => {
    axios({
      method: "GET",
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=59fa0a941f4e6fa5cc12a58c93d43fee`,
    })
      .then((response) => {
        setTemperature(response.data.main.temp);
        setDesc(response.data.weather[0].main);
        setIcon(response.data.weather[0].icon);
        setCity(response.data.name)
      })
      .catch((error) => {
        console.log(error);
      });
  };
    return (
      <div>
       <Container>
       <Row>
         <Col xs="2">
           <h5>Cities</h5>
           
           <input
           className='citybutton'
           type="submit"
           value="London"
           onClick={() => {
            getWeatherData("London");
          }}

           />
           <br/>
            <input
           className='citybutton'
           type="submit"
           value="Aydın"
           onClick={() => {
            getWeatherData("Aydin");
           }}
           /> 
           <br/>
           <input
           className='citybutton'
           type="submit"
           value="Denizli"
           onClick={() => {
            getWeatherData("Denizli");
           }}
           /> 

          <br/>
           <input
           className='citybutton'
           type="submit"
           value="İstanbul"
           onClick={() => {
            getWeatherData("Istanbul");
           }}
           /> 
         </Col>
         <Col xs="10" className='col'>
             <b>{city}</b>
             <br/>
            {desc} {Math.ceil(temperature)} ℃ <img src ={`http://openweathermap.org/img/w/${icon}.png`}/>
         </Col>
       </Row>
     </Container>
     
      </div>
    )
  }
 
  export default Weather;