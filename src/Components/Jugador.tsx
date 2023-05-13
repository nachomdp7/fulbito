import React from 'react'

function Jugador({idEquipo,idJugador,name,posicion,edad}:any) {
  return (
    <div>
    <p>Id Equipo: {idEquipo}</p>
    <p>Id: {idJugador}</p>
    <p>Jugador: {name}</p>
    <p>Posicion:{posicion}</p>
    <p>Edad:{edad}</p>
    </div>
  )
}

export default Jugador