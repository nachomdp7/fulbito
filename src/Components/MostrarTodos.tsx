import React, { useState } from 'react'
import axios from 'axios'

function MostrarTodos() {
    const [listaJugadores,setListaJugadores]=useState()
    const [listaEquipos,setListaEquipos]=useState()

    function traerTodosJugadores(){
        axios.get("codigo java lista jugadores")
        .then(function(response){
            setListaJugadores(response.data)
        })
    }

    function traerTodosEquipos(){
        axios.get("codigo java lista equipos")
        .then(function(response){
            setListaEquipos(response.data)
        })
    }
    
  return (
    <div>MostrarTodos</div>
  )
}

export default MostrarTodos