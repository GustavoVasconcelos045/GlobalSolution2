import React from 'react';
import Header from './components/header';

const Home: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 text-gray-800">
            <header className="mb-8 text-center">
                <h1 className="text-4xl font-bold text-green-600">Economize Energia e Use Energia Limpa</h1>
                <p className="text-lg mt-2 text-gray-600">Juntos por um futuro mais sustentável!</p>
            </header>

            <main className="max-w-3xl bg-white shadow-lg rounded-lg p-6 md:p-10">
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-green-600 mb-2">Economize Energia no Dia a Dia</h2>
                    <p className="text-gray-700">
                        Reduzir o consumo de energia elétrica em casa e no trabalho pode parecer uma tarefa pequena, mas quando praticada por muitos, o impacto é significativo. Algumas dicas simples para economizar energia incluem:
                    </p>
                    <ul className="list-disc list-inside mt-3 text-gray-700">
                        <li>Desligue aparelhos quando não estiverem em uso.</li>
                        <li>Utilize iluminação eficiente, como lâmpadas de LED.</li>
                        <li>Aproveite a luz natural sempre que possível.</li>
                        <li>Mantenha eletrodomésticos em bom estado de conservação.</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-green-600 mb-2">O Impacto Positivo da Energia Limpa</h2>
                    <p className="text-gray-700">
                        Energia limpa, proveniente de fontes renováveis como solar, eólica, hidrelétrica e biomassa, tem um impacto ambiental muito menor em comparação às fontes tradicionais de energia. Essas fontes reduzem a emissão de poluentes e utilizam recursos naturais renováveis e abundantes.
                    </p>
                    <p className="mt-3 text-gray-700">
                        Investir em energia solar e eólica, por exemplo, ajuda a reduzir a dependência de combustíveis fósseis e apoia o desenvolvimento de tecnologias sustentáveis.
                    </p>
                </section>

                <section className="mb-6">
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
                    <h2 className="text-2xl font-semibold text-green-600 mb-2">Um Futuro Sustentável Começa com Nossas Escolhas</h2>
                    <p className="text-gray-700">
                        Cada um de nós pode contribuir para um planeta mais sustentável ao praticar o consumo consciente de energia e incentivar o uso de fontes limpas. Economizar energia não é apenas uma questão financeira, mas uma responsabilidade com as gerações futuras e a saúde do planeta.
                    </p>
                    <p className="mt-3 font-bold text-gray-800">
                        Vamos juntos fazer a diferença, economizando energia e investindo em um futuro mais limpo!
                    </p>
                </section>
            </main>
        </div>
    );
};

export default Home;
