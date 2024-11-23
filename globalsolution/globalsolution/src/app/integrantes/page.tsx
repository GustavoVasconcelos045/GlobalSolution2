import Image from 'next/image'; // Importa o componente de imagem do Next.js
import Footer from '../components/Footer'; // Importa o componente Footer
import Header from '../components/Header'; // Importa o componente Header

// Definição dos participantes com seus dados
const participantes = [
    {
        nome: 'Felipe - RM558916 - 1TDSPG',
        foto: '/image/felipe.png', // Foto do participante
        github: 'https://github.com/FelipeSants08', // Link do GitHub
        githubIcon: '/image/github-icon.png', // Ícone do GitHub
        linkedin: 'https://www.linkedin.com/in/felipe-santana-santos-3a43092ba/', // Link do LinkedIn
        linkedinIcon: '/image/linkedin.png' // Ícone do LinkedIn
    },
    {
        nome: 'Gustavo - RM558463 - 1TDSPG',
        foto: '/image/gustavo.png', // Foto do participante
        github: 'https://github.com/GustavoVasconcelos045', // Link do GitHub
        githubIcon: '/image/github-icon.png', // Ícone do GitHub
        linkedin: 'https://www.linkedin.com/in/gustavovasconcelos045/', // Link do LinkedIn
        linkedinIcon: '/image/linkedin.png' // Ícone do LinkedIn
    },
    {
        nome: 'Igor - RM558532 - 1TDSPG',
        foto: '/image/igor.png', // Foto do participante
        github: 'https://github.com/Igorfelicori', // Link do GitHub
        githubIcon: '/image/github-icon.png', // Ícone do GitHub
        linkedin: 'https://www.linkedin.com/in/igor-felicori-94a029281/', // Link do LinkedIn
        linkedinIcon: '/image/linkedin.png' // Ícone do LinkedIn
    },
];

const Participantes = () => { // Componente para exibir a lista de participantes
    return (
        <div className="flex flex-col min-h-screen"> 
            <Header /> 
            <div className="container mx-auto py-10 flex-grow">
                <h1 className="text-3xl font-bold text-center mb-8">Participantes</h1> 
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> 
                    {participantes.map((integrante, index) => ( // Mapeia o array de participantes
                        <div key={index} className="bg-white shadow-lg rounded-lg p-5 flex flex-col items-center">
                            <Image 
                                src={integrante.foto}
                                alt={integrante.nome}
                                width={150}
                                height={150}
                                className="rounded-full mb-4" // Foto com borda arredondada
                            />
                            <h2 className="text-xl font-semibold text-black">{integrante.nome}</h2> 
                            <div className="flex space-x-4 mt-2"> 
                                <a href={integrante.github} target="_blank" rel="noopener noreferrer">
                                    <Image 
                                        src={integrante.githubIcon} 
                                        alt="GitHub" 
                                        width={24} 
                                        height={24} 
                                    />
                                </a>
                                <a href={integrante.linkedin} target="_blank" rel="noopener noreferrer">
                                    <Image 
                                        src={integrante.linkedinIcon} 
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

export default Participantes; // Exporta o componente para ser usado em outros lugares
