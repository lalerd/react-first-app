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
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&APPID=6c3bc96b2702b6bd11e9bb46d841bcb8`,
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
            getWeatherData("London","uk");
          }}

           />
           <br/>
            <input
           className='citybutton'
           type="submit"
           value="Aydın"
           onClick={() => {
            getWeatherData("Aydin","tr");
           }}
           /> 
           <br/>
           <input
           className='citybutton'
           type="submit"
           value="Denizli"
           onClick={() => {
            getWeatherData("Denizli","tr");
           }}
           /> 

          <br/>
           <input
           className='citybutton'
           type="submit"
           value="İstanbul"
           onClick={() => {
            getWeatherData("Istanbul","tr");
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