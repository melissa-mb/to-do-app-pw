import { Link } from "react-router-dom"
import HistoricoPage from "../pages/HistoricoPage"

const Navegacion = () => {
    return <div>
        {/*sección tabs*/}
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link to="/" className="nav-link">Tareas</Link>
            </li>
            <li className="nav-item">
                <Link to="/historico" className="nav-link">Historico</Link>
            </li>
        </ul>
    </div>

}
export default Navegacion