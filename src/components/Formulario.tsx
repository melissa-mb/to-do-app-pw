import { useState } from "react"
interface FormularioProps {
    agregar : (texto: string) => void
}

const Formulario = (props: FormularioProps) => {
    const [textoTodo, setTextoTodo] = useState("")

    const textoOnChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setTextoTodo(evt.currentTarget.value) // guarda lo que está actualmente en la variable en textoOnChange
    }


    return <div>
        {/*Formulario to-do's*/}
        <div className="row mt-4">
            <div className="col-md-10">
                <input className="form-control" type="text"
                    value={textoTodo} //establece que el formulario tenga "" inicialmente, pero no deja cambiar asi no mas
                    onChange={textoOnChange} // hace que en cada cambio se actualice el valor
                />
            </div>
            <div className="col-md-2">
                <button type="button" className="btn btn-primary" onClick={() => {
                    props.agregar(textoTodo)
                    console.log("Se debera guardar el todo:" + textoTodo)
                }}>
                    Agregar
                </button>
            </div>
        </div>
    </div>


}

export default Formulario