import React, { useState,useEffect } from 'react'
import axios from 'axios'
import Equipo from './Equipo'

function MostrarTodos() {

    const [listaEquipos,setListaEquipos]=useState([])

        function traerTodosEquipos(){
        axios.get("http://localhost:8080/PagFutbolEquipo/viewAllEquipos")
        .then((response)=>{
            console.log(response.data)
            setListaEquipos(response.data)}
            )}

    useEffect(() => {
        traerTodosEquipos()
    },[]);

  return (
    <div>
        {listaEquipos.map((equipo:any)=>(
        <div key={equipo.id_Equipo}><Equipo id_Equipo={equipo.id_Equipo} nombre_Equipo={equipo.nombre_Equipo} anioCreacion={equipo.anioCreacion}/></div>
    ))}</div>
  )
}

export default MostrarTodos