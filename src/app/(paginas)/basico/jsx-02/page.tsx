export default function ExemploJSX02() {
  function renderizarCirculo(texto: string) {
    return (
      <div>
        <div className="flex justify-center items-center
        h-12 w-12 rounded-full bg-red-500 gap-1">
          {texto}
        </div>
      </div>
    )

  }

  return (
    <div className="container">
      <div className="exercicio">
        <h1>Entendendo o JSX #02</h1>
        <div className="conteudo">
          <div className="grid grid-cols-3 gap-5">
            {renderizarCirculo("#01")}
            {renderizarCirculo("#02")}
            {renderizarCirculo("#03")}
          </div>
        </div>
      </div>
    </div>
  );
}
