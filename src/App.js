import React, { useEffect, useState } from "react";
import getClima from "./services";
import CardInfo from "./components/CardInfoMeteo.jsx";
import CardInfoMeteo from "./components/CardInfoMeteo.jsx";   
import SearchLugar from "./components/SearchLugar.jsx";
const App = () => {

    const [data, setData] = useState({
      lugar: "",  
      latitud:"",
      longitud: "",
      temperatura: "",
      vientos: "",
    });

    const [ciudad, setCiudad] = useState('');
    const [latitud, setLatitud]  = useState('');
    const [longitud, setLongitud]  = useState('');
    //muetsra por consola lso valores de de Get clima qye retonra data(traido de aopi meteo)
    console.log(data)
  /*useEffect(()=>{
        getClima().then(response => console.log(response))
    }, [])*/

  /*Traemos los valores de service.js donde ingresaamos la api q nos retorna "data" */
  /* trae los valores junto con con el texto*/
    useEffect(() => {
      getClima(ciudad, latitud, longitud).then((data) => {
        console.log(data);
        setData((prevState) =>({
          ...prevState,
          lugar: data.timezone,  
          latitud: data.latitude,
          longitud: data.longitude,
          temperatura: data.current_weather.temperature,
          vientos: data.current_weather.windspeed,
        }));
      });
  }, []);

  /*Funcion handleSumit que sera pasada por props a searchCountry y sera renderizado en el retur
  const del SearchLugar para buscar lugar para dar el clima */
  /**es para  mostrrar la ciudad */
  const handleSumit =(e) =>{
    //con preventDefault para que no ser ecargue la pagina
    e.preventDefault()
    setCiudad(e.target[0].value);
    setLatitud(e.target[1].value);
    setLongitud(e.target[2].value);
    //muestre el valor por consola
    console.log(e.target[0].value)
    console.log(e.target[1].value)
    console.log(e.target[2].value)
    e.target.reset()
  }
  return (
    <>
    <SearchLugar handleSumit={ handleSumit }/>
    <CardInfoMeteo data={data}/>    
    </>
  );
};
export default App
