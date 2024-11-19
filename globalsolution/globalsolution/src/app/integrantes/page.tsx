import React from 'react';
import Image from 'next/image';
import Header from '../components/Header';  // Corrija o caminho conforme a estrutura do seu projeto
import Footer from '../components/Footer'; // Importe o Footer

const participantes = [
    {
        nome: 'Felipe - RM558916 - 1TDSPG',
        foto: '/image/felipe.png', // Caminho para as imagens na pasta public
        github: 'https://github.com/FelipeSants08',
        githubIcon: '/image/github-icon.png',
        linkedin: 'https://www.linkedin.com/in/felipe-santana-santos-3a43092ba/',
        linkedinIcon: '/image/linkedin.png'
    },
    {
        nome: 'Gustavo - RM558463 - 1TDSPG',
        foto: '/image/gustavo.png',
        github: 'https://github.com/GustavoVasconcelos045',
        githubIcon: '/image/github-icon.png',
        linkedin: 'https://www.linkedin.com/in/gustavovasconcelos045/',
        linkedinIcon: '/image/linkedin.png'
    },
    {
        nome: 'Igor - RM558532 - 1TDSPG',
        foto: '/image/igor.png',
        github: 'https://github.com/Igorfelicori',
        githubIcon: '/image/github-icon.png',
        linkedin: 'https://www.linkedin.com/in/igor-felicori-94a029281/',
        linkedinIcon: '/image/linkedin.png'
    },
];

const Participantes = () => {
    return (
        <div className="flex flex-col min-h-screen"> {/* Flexbox para ocupar toda a altura da tela */}
            <Header /> {/* Adicionando o Header aqui */}
            <div className="container mx-auto py-10 flex-grow"> {/* Contêiner flexível */}
                <h1 className="text-3xl font-bold text-center mb-8">Participantes</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {participantes.map((integrante, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg p-5 flex flex-col items-center">
                            <Image
                                src={integrante.foto}  // Caminho da imagem
                                alt={integrante.nome}
                                width={150}
                                height={150}
                                className="rounded-full mb-4"
                            />
                            <h2 className="text-xl font-semibold text-black">{integrante.nome}</h2>
                            <div className="flex space-x-4 mt-2">
                                <a
                                    href={integrante.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Image
                                        src={integrante.githubIcon}  // Caminho do ícone do GitHub
                                        alt="GitHub"
                                        width={24}
                                        height={24}
                                    />
                                </a>
                                <a
                                    href={integrante.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Image
                                        src={integrante.linkedinIcon}  // Caminho do ícone do LinkedIn
                                        alt="LinkedIn"
                                        width={24}
                                        height={24}
                                    />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer /> 
        </div>
    );
};

export default Participantes;
