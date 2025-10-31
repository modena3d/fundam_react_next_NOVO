export default function ExemploJSX02() {
  const numero = 10
  const numeroPar = numero % 2 === 0
  return (
    <div className="container">
      <div className="exercicio">
        <h1>Entendendo o JSX #03</h1>
        <div className="conteudo">
          {numeroPar ? (
            <span className="text-green-500">Par</span>
          ) : (<span className="text-red-500">Ímpar</span>
          )}

          {numeroPar && (
            <span>O resto da divisao por 2 é igual a zero!</span>
          )}
        </div>
      </div>
    </div>
  );
}
