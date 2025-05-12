import { useState, type useSyncExternalStore } from "react"
import Formulario from "../components/Formulario"
import ListaTODOs, {type Todo} from "../components/ListaTODOs"
import Navegacion from "../components/Navegacion"
import Titulo from "../components/Titulo"

const MainPage = () => {
  const [listaTODOs,setListaTodos] = useState<Todo[]>([])


  const agregarTodo = (texto: string) => {
    listaTODOs.push({
      id: listaTODOs.length+1,
      nombre: texto
    })
    setListaTodos([...listaTODOs] /*crear una nueva lista y darle los elementosen listaTODOs*/)
  }

  return <div className="container">
    <Titulo texto="To-Do App"/>
    <Navegacion />
    <Formulario agregar={agregarTodo}/>
    <ListaTODOs todos = {listaTODOs} esHistorico={false}/> 
  </div>
}

export default MainPage