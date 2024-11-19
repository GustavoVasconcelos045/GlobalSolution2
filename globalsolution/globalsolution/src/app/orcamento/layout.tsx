import React from 'react';
import '../globals.css'; // Certifique-se de que este arquivo contém estilos globais necessários.
import Header from '@/app/components/header'; // Adapte o caminho conforme a estrutura do seu projeto.
import Footer from '@/app/components/footer'; // Adapte o caminho conforme a estrutura do seu projeto.
 
interface LayoutProps {
    children: React.ReactNode;
}
 
export default function Layout({ children }: LayoutProps) {
    return (
<div className="flex flex-col min-h-screen">
<Header />
<main className="flex-grow p-8 bg-gray-100">
                {children}
</main>
<Footer />
</div>
    );
}
