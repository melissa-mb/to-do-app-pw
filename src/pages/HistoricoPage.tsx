import ListaTODOs, {type Todo} from "../components/ListaTODOs"
import Navegacion from "../components/Navegacion"
import Titulo from "../components/Titulo"

const HistoricoPage = () => {

    const listaHistorico : Todo[] = [
        {id: 1, nombre:'Estudiar PW'}
    ]
    return <div className="container">
        <Titulo texto="To-Do Histórico"/>
        <Navegacion />
        <ListaTODOs todos = {listaHistorico} esHistorico={true}/> 
        </div>
}

export default HistoricoPage