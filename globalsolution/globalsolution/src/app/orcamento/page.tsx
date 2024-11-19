import Head from 'next/head';

const OrcamentoPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Head>
                <title>Orçamento de Placas Solares - GIF Energy</title>
                <meta name="description" content="Orçamento detalhado para instalação de placas solares." />
            </Head>

            <header className="bg-blue-600 p-4 sm:p-6 text-white text-center">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                    Orçamento para Instalação de Placas Solares
                </h1>
                <p className="mt-2 text-sm sm:text-base lg:text-lg">
                    Estime o custo e o retorno do investimento para o seu sistema solar.
                </p>
            </header>

            <main className="flex-grow container mx-auto p-4 sm:p-8">
                {/** Seções do orçamento */}
                <section className="bg-white shadow-lg rounded-lg p-4 sm:p-6 mb-8">
                    <h2 className="text-xl sm:text-2xl font-semibold mb-4">1. Avaliação Inicial</h2>
                    <p>
                        O primeiro passo é entender o consumo de energia mensal. Se você consome, por exemplo, 400 kWh por mês, o
                        sistema solar necessário será de aproximadamente 2.67 kW (considerando 5 horas de sol/dia).
                    </p>
                </section>

                <section className="bg-white shadow-lg rounded-lg p-4 sm:p-6 mb-8">
                    <h2 className="text-xl sm:text-2xl font-semibold mb-4">2. Custos de Equipamentos</h2>
                    <p>
                        O preço dos equipamentos necessários para a instalação de um sistema solar varia de acordo com o tipo e
                        a marca:
                    </p>
                    <ul className="list-disc pl-4 sm:pl-6 mt-4 text-sm sm:text-base">
                        <li><strong>Painéis Solares:</strong> De R$ 1.200 a R$ 2.500 por unidade.</li>
                        <li><strong>Inversor Solar:</strong> Entre R$ 3.000 e R$ 7.000.</li>
                        <li><strong>Estrutura de Montagem:</strong> De R$ 800 a R$ 2.500.</li>
                    </ul>
                </section>

                <section className="bg-white shadow-lg rounded-lg p-4 sm:p-6 mb-8">
                    <h2 className="text-xl sm:text-2xl font-semibold mb-4">Resumo do Orçamento</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full table-auto text-left text-sm sm:text-base">
                            <thead className="bg-gray-200">
                                <tr>
                                    <th className="px-4 py-2">Item</th>
                                    <th className="px-4 py-2">Custo Estimado</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="px-4 py-2">9 Painéis Solares (300 W cada)</td>
                                    <td className="px-4 py-2">R$ 10.800 a R$ 22.500</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2">Inversor Solar</td>
                                    <td className="px-4 py-2">R$ 3.000 a R$ 7.000</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2">Estrutura de Montagem</td>
                                    <td className="px-4 py-2">R$ 800 a R$ 2.500</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2">Instalação</td>
                                    <td className="px-4 py-2">R$ 2.000 a R$ 5.000</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2">Licenciamento e Documentação</td>
                                    <td className="px-4 py-2">R$ 500 a R$ 1.500</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2">Manutenção Anual (opcional)</td>
                                    <td className="px-4 py-2">R$ 300 a R$ 800</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default OrcamentoPage;
