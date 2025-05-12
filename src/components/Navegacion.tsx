import { Link } from "react-router-dom"
import HistoricoPage from "../pages/HistoricoPage"

const Navegacion = () => {
    return <div>
        {/*sección tabs*/}
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a className="nav-link active" href="#">Tareas</a>
            </li>
            <li className="nav-item">
                <Link to="/historico" className="nav-link">Historico</Link>
            </li>
        </ul>
    </div>


}
export default Navegacion