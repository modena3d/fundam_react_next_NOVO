import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>Página Inicial</div>
      <Link href="/basico/primeiro">Primeiro Componente</Link>;
      <Link href="/basico/jsx" className="flex flex-col">LINK_JSX</Link>;
    </div>
  );
}
