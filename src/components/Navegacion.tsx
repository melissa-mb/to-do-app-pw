import { Link } from "react-router-dom"
import HistoricoPage from "../pages/HistoricoPage"

export enum Pagina {
    Main, Historico
}

interface NavegacionProps{
    pagina: Pagina
}

const Navegacion = (props : NavegacionProps) => {
    return <div>
        {/*sección tabs*/}
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link to="/" className={`nav-link ${props.pagina == Pagina.Main ? "active" : ""}`}>Tareas</Link>
            </li>
            <li className="nav-item">
                <Link to="/historico" className={`nav-link ${props.pagina == Pagina.Historico ? "active" : ""}`}>Historico</Link>
            </li>
        </ul>
    </div>

}
export default Navegacion