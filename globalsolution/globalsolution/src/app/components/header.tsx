import Link from 'next/link';


export default function Header() {
    return (
        <header className="p-4 h-[20vh] flex flex-col items-center">
            <h1 className="text-5xl font-bold mb-4">GIF Energy</h1>
            <nav className="flex gap-x-20">
                <Link href="/">Início</Link>
                <Link href="/orcamento">Orçamento</Link>
                <Link href="/simulacao">Simulação</Link>
                <Link href="/integrantes">Integrantes</Link>
            </nav>
        </header>
    );
}
