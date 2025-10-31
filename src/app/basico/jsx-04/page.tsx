export default function ExemploJSX04() {
  const listaDeAprovados = [
    'Rebeca',
    'Guilherme',
    'Maria',
    'Thiago',
    'Pedro'
  ]

  const spans1 = [
    <span key='1'>{listaDeAprovados[0]}</span>,
    <span key='2'>{listaDeAprovados[1]}</span>,
    <span key='3'>{listaDeAprovados[2]}</span>,
    <span key='4'>{listaDeAprovados[3]}</span>,
    <span key='5'>{listaDeAprovados[4]}</span>
  ]

  const spans2 = []
  for (let nome of listaDeAprovados) {
    spans2.push(<span key={nome}>### {nome}</span>)
  }
  return (
    <div className="container">
      <div className="exercicio">
        <h1>Entendendo o JSX #04</h1>
        <div className="conteudo">
          <div className="flex flex-col gap-3">
            {listaDeAprovados.map(nome => {
              return (
                <div key={nome} className="flex justify-between bg-black p-3 rounded-md">
                  <span className="text-red-500">{nome}</span>
                  <div className="flex gap-2">
                    <button className="bg-blue-500 p-2 text-sm rounded-md">Editar</button>
                    <button className="bg-red-500 p-2 text-sm rounded-md">Excluir</button>
                  </div>
                </div>
              )
            })}
          </div>
          {spans1}
          {spans2}
        </div>
      </div>
    </div>
  );
}
