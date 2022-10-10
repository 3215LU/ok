import React from 'react'
import getClima from '../services'

const CardInfoMeteo = ({data}) => {
console.log(data)    
/*
let image =
data.temp <= 0 ?
*/

return (
    <>
    <h3> Lugar: {data.lugar}</h3>
    <h5><b>Latitud: </b>{data.latitud} º</h5>
    <h5><b>Longitud: </b>{data.longitud} º</h5>
    <img src="" alt=""/>
    <h5><b>Temperatura: </b>{data.temperatura} º C.</h5>
    <h5><b>Vientos: </b>{data.vientos} Km/h</h5>    
    </>
  )
}

export default CardInfoMeteo