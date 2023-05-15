import React, { useState } from 'react'
import axios from 'axios'

function InsertoJugador() {

   
    const [nombre, setNombre] = useState()
    const [idEquipo, setIdEquipo] = useState()
    const [edad, setEdad] = useState()
    const [posicion, setPosicion] = useState()

    function addPlayer() {  
        axios.post("http://localhost:8080/pagFutbol/Jugador/add", { 
            id_Equipo: idEquipo, nombre_Jugador: nombre, edad_Jugador: edad, posicion_Jugador: posicion}
        ).then((response)=>{
        console.log(response.data)}
        )}
    function handleIdEChange(event: any) {
        setIdEquipo(event.target.value)
    }
   
    function handleNombreEChange(event: any) {
        setNombre(event.target.value)
    }
    function handleEdadChange(event: any) {
        setEdad(event.target.value)
    }
    function handlePosicionChange(event: any) {
        setPosicion(event.target.value)
    }

    return (
        <div>
        <label htmlFor="idEquipo">ID Equipo:</label>
        <input id="idEquipo" type='number' onChange={handleIdEChange}></input>
        <label htmlFor="name">NAME:</label>
        <input id="name" type='text' onChange={handleNombreEChange}></input>
        <label htmlFor="edad">Edad:</label>
        <input id="edad" type='number' onChange={handleEdadChange}></input>
        <label htmlFor="posicion">Posicion:</label>
        <input id="posicion" type='number' onChange={handlePosicionChange}></input>
        <button onClick={addPlayer}>Agregar </button>

    </div>
    )
}

export default InsertoJugador