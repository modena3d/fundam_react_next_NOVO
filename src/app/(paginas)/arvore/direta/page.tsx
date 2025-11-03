import Pai from "@/components/arvore/direta/Pai";
import Titulo from "@/components/template/Titulo";

export default function ComunicacaoDireta() {
    return (
        <div>
            <Titulo
                principal="Comunicação Direta"
                secundario="Exemplo de Comunicação direta entre componentes"
            />
            <Pai
                nome="João"
                sobrenome="Silva"
                filhos={["Ana", "Roberto", "Lucia", "Gabriel"]}
            />
        </div>
    )
}