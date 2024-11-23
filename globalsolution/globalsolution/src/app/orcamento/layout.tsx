import React from 'react';
import '../globals.css'; 
import Header from '@/app/components/header'; 
import Footer from '@/app/components/footer'; 
 
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
