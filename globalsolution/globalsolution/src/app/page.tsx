import React from 'react'; // Importa o React para usar JSX e seus hooks
import Header from './components/header'; // Importa o componente Header (cabeçalho)
import Footer from './components/footer'; // Importa o componente Footer (rodapé)

const Home: React.FC = () => { // Define o componente funcional "Home"
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 text-gray-800"> 
            {/* Define a estrutura da página com estilo de fundo e texto */}

            <Header /> {} 
            {/* Exibe o componente Header no topo da página */}

            <header className="mb-8 text-center"> 
                {/* Define um cabeçalho centralizado com margens no fundo */}
                <h1 className="text-4xl font-bold text-green-600">Economize Energia e Use Energia Limpa</h1> 
                {/* Título principal da página */}
                <p className="text-lg mt-2 text-gray-600">Juntos por um futuro mais sustentável!</p>
                {/* Subtítulo com texto de incentivo */}
            </header>

            <main className="max-w-3xl bg-white shadow-lg rounded-lg p-6 md:p-10"> 
                {/* Bloco principal com fundo branco e sombra */}
                <section className="mb-6"> 
                    {/* Seção de dicas para economizar energia */}
                    <h2 className="text-2xl font-semibold text-green-600 mb-2">Economize Energia no Dia a Dia</h2> 
                    {/* Título da seção */}
                    <p className="text-gray-700">
                        Reduzir o consumo de energia elétrica em casa e no trabalho pode parecer uma tarefa pequena, mas quando praticada por muitos, o impacto é significativo. Algumas dicas simples para economizar energia incluem:
                    </p>
                    <ul className="list-disc list-inside mt-3 text-gray-700">
                        <li>Desligue aparelhos quando não estiverem em uso.</li> {/* Item 1 */}
                        <li>Utilize iluminação eficiente, como lâmpadas de LED.</li> {/* Item 2 */}
                        <li>Aproveite a luz natural sempre que possível.</li> {/* Item 3 */}
                        <li>Mantenha eletrodomésticos em bom estado de conservação.</li> {/* Item 4 */}
                    </ul>
                </section>

                <section className="mb-6"> 
                    {/* Seção sobre energia limpa */}
                    <h2 className="text-2xl font-semibold text-green-600 mb-2">O Impacto Positivo da Energia Limpa</h2>
                    <p className="text-gray-700">
                        Energia limpa, proveniente de fontes renováveis como solar, eólica, hidrelétrica e biomassa, tem um impacto ambiental muito menor em comparação às fontes tradicionais de energia. Essas fontes reduzem a emissão de poluentes e utilizam recursos naturais renováveis e abundantes.
                    </p>
                    <p className="mt-3 text-gray-700">
                        Investir em energia solar e eólica, por exemplo, ajuda a reduzir a dependência de combustíveis fósseis e apoia o desenvolvimento de tecnologias sustentáveis.
                    </p>
                </section>

                <section className="mb-6">
                    {/* Seção sobre os benefícios */}
                    <h2 className="text-2xl font-semibold text-green-600 mb-2">Benefícios para o Meio Ambiente e a Economia</h2>
                    <p className="text-gray-700">
                        A redução do consumo de energia e a utilização de energias renováveis beneficiam o planeta e as pessoas. Alguns dos principais benefícios incluem:
                    </p>
                    <ul className="list-disc list-inside mt-3 text-gray-700">
                        <li>Redução das emissões de carbono e do aquecimento global.</li>
                        <li>Conservação de recursos naturais como carvão e petróleo.</li>
                        <li>Economia de custos no longo prazo, com contas de energia mais baixas.</li>
                    </ul>
                </section>

                <section className="mb-6">
                    {/* Seção de chamada para ação */}
                    <h2 className="text-2xl font-semibold text-green-600 mb-2">Um Futuro Sustentável Começa com Nossas Escolhas</h2>
                    <p className="text-gray-700">
                        Cada um de nós pode contribuir para um planeta mais sustentável ao praticar o consumo consciente de energia e incentivar o uso de fontes limpas. Economizar energia não é apenas uma questão financeira, mas uma responsabilidade com as gerações futuras e a saúde do planeta.
                    </p>
                    <p className="mt-3 font-bold text-gray-800">
                        Vamos juntos fazer a diferença, economizando energia e investindo em um futuro mais limpo!
                    </p>
                </section>
            </main>
            <Footer /> 
            {/* Exibe o componente Footer na parte inferior da página */}
        </div>
    );
};

export default Home; 
// Exporta o componente Home para ser utilizado em outras partes do projeto
