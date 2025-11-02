import Pagina from "@/components/template/Pagina";

export default function Layou(props: any) {
  return (
    <Pagina>

      {props.children}
      </Pagina>
    );
}
