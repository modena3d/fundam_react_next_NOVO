import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>Página Inicial</div>
      <Link href="/basico/primeiro">Primeiro Componente</Link>;
    </div>
  );
}
