import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";

export interface PaginaProps {
  children?: any;
}
export default function Pagina(props: PaginaProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Cabecalho />
      <main className="p-6 flex-1">{props.children}</main>
      <Rodape />
    </div>
  );
}
