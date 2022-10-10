import React from 'react'
import CardInfoMeteo from './CardInfoMeteo'
import Service from './../services'

/**en hanldeSumit va a recibir la informacion */
const SearchLugar = ({ handleSumit }) => {

    return (
    <>    
<div className="card text-center">
    <div className="card-body  text-center " >
        <h5 className="card-title">CLIMA</h5>

      <form className="row g-3" action="" onSubmit={ handleSumit }>        
            <div className="col-md-3">
            <label  className="form-label">Ciudad </label>
            <input type="text" placeholder='Ciudad' className="form-control" id="validationDefault05" required/>
        </div>
        <br/>
        <div className="col-md-3">
            <label  className="form-label">Latitud </label>
            <input type="number" step="0.000000000001" placeholder='Ingrese la latitud 26,98889'  className="form-control" id="validationDefault05" required/>
        </div>
        <br/>
        <div className="col-md-3">
            <label  className="form-label">Longitud </label>
            <input type="number" step="0.000000000001" placeholder='Ingrese longitud 23,98889' className="form-control" id="validationDefault05" required/>
        </div>
        <div className="col-md-3 ">
            <button className="btn btn-dark" type="submit" >Buscar</button>
        </div>
        </form> 
        </div>
        </div>
    </>    
  )
}


export default SearchLugar