import React, {useState} from 'react';
import TareasLista from './TareasLista'
import uuidv4 from 'uuid/v4'

function App() {
  const [ tareas, setTareas ] = useState ([ ])

  function agregarTarea(e){

  }
  
  return (
    <>
    <TareasLista tareas={tareas}/>
    <input type="text" />
    <button onClick={agregarTarea}>Añadir Tarea</button>
    <button>Limpiar Tareas Completadas</button>
    <div>0 tareas por terminar</div>
    </>
  )
}

export default App;
