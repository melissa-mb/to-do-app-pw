export interface Todo {
    id: number,
    nombre: string
}

interface ListaTodosProps {
    todos: Todo[]
}

const ListaTODOs = (props: ListaTodosProps) => {
    return <div className="mt-4">
        {/*lista to-do's*/}
        {/*si quiero poner que sea dinamico, no puedo poner un for xq no es una expresion... asi que... */}

        <ul className="list-group ">
            {
                props.todos.map((el: Todo) => {
                    return <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            {el.nombre}
                        </div>
                        <input className="form-check-input" type="checkbox" />
                    </li>
                })
            }
        </ul>
    </div>


}

export default ListaTODOs