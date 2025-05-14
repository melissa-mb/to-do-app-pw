import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Pagina } from "./Navegacion";

interface TituloProps {
  texto: string;
  pagina: Pagina;
}

const Titulo = (props: TituloProps) => {
  const [contClicks, setContClicks] = useState(0);
  const navigate = useNavigate(); // hook
  return (
    <div>
      <h1
        className="d-flex justify-content-between align-intems-start"
        onClick={() => {
          setContClicks(contClicks + 1);
        }}
      >
        {props.texto}{contClicks}


        {
        (() => {
          if (props.pagina == Pagina.Historico) {
            return <button className="btn btn-primary mt-2 me-3" 
            type="button" 
            onClick={() => {
                  navigate("/");
                }}>Regresar</button>
          }
        })()
        }
      </h1>
    </div>
  );
};

{
  /* si quieres nombrar la función tendrías que:
    const funcion ()=>{
    }
    (Declararla) y luego llamarla en onClick(funcion)*/
}
export default Titulo;
