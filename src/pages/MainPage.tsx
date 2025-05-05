import Formulario from "../components/Formulario"
import ListaTODOs, {type Todo} from "../components/ListaTODOs"
import Navegacion from "../components/Navegacion"
import Titulo from "../components/Titulo"

const MainPage = () => {
  const listaTODOs: Todo[] = [
    {id : 1, nombre : "Ir al cine"}, 
    {id : 2, nombre : "Limpiar cuarto"}, 
    {id : 3, nombre : "Hacer desayuno"}
  ]

  return <div className="container">
    <Titulo texto="To-Do App"/>
    <Navegacion />
    <Formulario />
    <ListaTODOs todos = {listaTODOs}/>
  </div>
}

export default MainPage