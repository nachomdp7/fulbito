import React from 'react'

function Equipo({id_Equipo,nombre_Equipo,anioCreacion}:any) {
  return (
    <div className='border-gray-400 border-2 p-4 rounded-sm'>
    <div className='flex gap-4'>
    <p>Id: {id_Equipo}</p>
    <p>Equiop: {nombre_Equipo}</p>
    <p>año: {anioCreacion}</p>
    </div>
  </div>
  )
}

export default Equipo