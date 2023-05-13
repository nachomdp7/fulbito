import { useState } from 'react'
import './App.css'
import InsertoJugador from './Components/InsertoJugador'
import Jugador from './Components/Jugador'
import "primereact/resources/themes/lara-light-indigo/theme.css";     

import "primereact/resources/primereact.min.css";   //core css
import {Button} from 'primereact/button';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='m-12'>
      <div className='flex align-center justify-evenly mb-12'>
        <Button label='btnText'/>
        <Button label='btnText' rounded/>
        <Button label='btnText' severity='help' text/>
      </div>
      <div className='flex gap-5 flex-wrap justify-center'>
        <Jugador idJugador={1} idEquipo={1} name="nacho" posicion={5} edad={21}/>
      </div>
    </div>
  )
}

export default App
