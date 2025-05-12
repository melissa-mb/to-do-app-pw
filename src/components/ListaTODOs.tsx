export interface Todo {
    id: number,
    nombre: string
}

interface ListaTodosProps {
    todos: Todo[]
    esHistorico: boolean
}

const ListaTODOs = (props: ListaTodosProps) => {
    return <div className="mt-4">
        {/*lista to-do's*/}
        {/*si quiero poner que sea dinamico, no puedo poner un for xq no es una expresion... asi que... */}

        <ul className="list-group mt-4">
            {
                props.todos.map((el: Todo) => { // props es la lista de to-dos, el es el elemento
                    return <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            {el.nombre}
                        </div>
                        {/*!props.esHistorico ? <input className="form-check-input" type="checkbox"/> : ""*/}

                        {(() => {
                            if (!props.esHistorico){
                                return <input className="form-check-input" type="checkbox"/>
                            }
                        })() //aca creamos una funcion y ahi mismo la ejecutamos, devuelve un valor y es una expresión
                        }

                    </li>
                    // te retornó el elemento to do seleccionado
                }) // te retorna de todos los elementos to do en el props
            }
        </ul>
    </div>


}

export default ListaTODOs