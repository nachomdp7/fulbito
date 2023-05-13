import React from 'react'

function Jugador({idEquipo,idJugador,name,posicion,edad}:any) {
  return (
    <div className='border-gray-400 border-2 p-4 rounded-sm'>
      <p className='text-2xl '> Id Equipo: {idEquipo}</p>
      <div className='flex gap-4'>
      <p>Id: {idJugador}</p>
      <p>Jugador: {name}</p>
      <p>Posicion: {posicion}</p>
      <p>Edad: {edad}</p>
      </div>
    </div>
  )
}

export default Jugador