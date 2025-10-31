import Aprovado from "@/components/Aprovados";
import { ApiError } from "next/dist/server/api-utils";

export default function Comp01() {
  const listaDeAprovados = [
    'Rebeca',
    'Guilherme',
    'Maria',
    'Thiago',
    'Pedro',
    'Carla',
  ]

  const spans2 = []
  for (let nome of listaDeAprovados) {
    spans2.push(<span key={nome}>### {nome}</span>)
  }
  return (
    <div className="container">
      <div className="exercicio">
        <h1>Criando Componentes #01</h1>
        <div className="conteudo">
          <div className="flex flex-col gap-3">
            {listaDeAprovados.map(nome => {
              return <Aprovado key={nome} nome={nome} />

            })}
          </div>

        </div>
      </div>
    </div>
  );
}
