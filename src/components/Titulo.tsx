import { useState } from "react"

interface TituloProps {
    texto: string
}

const Titulo = (props: TituloProps) => {
    const [contClicks, setContClicks] = useState(0)
    return <h1 onClick={() => {
        setContClicks(contClicks+1)
    }
    }>
        {props.texto}{contClicks}
    </h1>
}

{/* si quieres nombrar la función tendrías que:
    const funcion ()=>{
    }
    (Declararla) y luego llamarla en onClick(funcion)*/}
export default Titulo