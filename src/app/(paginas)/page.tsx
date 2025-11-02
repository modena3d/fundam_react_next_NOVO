import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>Página Inicial</div>
      <Link href="/basico/primeiro">Primeiro Componente</Link>;
      <Link href="/basico/jsx-01" className="flex flex-col">
        LINK_JSX-01
      </Link>
      <Link href="/basico/jsx-02" className="flex flex-col">
        LINK_JSX-02
      </Link>
      <Link href="/basico/jsx-03" className="flex flex-col">
        LINK_JSX-03
      </Link>
      <Link href="/basico/jsx-04" className="flex flex-col">
        LINK_JSX-04
      </Link>
      <Link href="/basico/comp-01" className="flex flex-col">
        LINK_COMP-01
      </Link>
      <Link href="/basico/comp-02" className="flex flex-col">
        LINK_COMP-02
      </Link>
    </div>
  );
}
