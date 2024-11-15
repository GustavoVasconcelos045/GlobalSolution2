import React from 'react';
import Head from 'next/head'; // Importação correta do Head
import Header from '../components/Header';  // Verifique se o caminho está correto
import Footer from '../components/Footer'; // Verifique se o caminho está correto

export default function SolarOrcamento() {
    return (
        <div className="flex flex-col min-h-screen">
            <Head>
                <title>Orçamento de Placas Solares - GIF Energy</title>
                <meta name="description" content="Orçamento detalhado para instalação de placas solares." />
            </Head>

            <header className="bg-blue-600 p-6 text-white text-center">
                <h1 className="text-4xl font-bold">Orçamento para Instalação de Placas Solares</h1>
                <p className="mt-2 text-lg">Estime o custo e o retorno do investimento para o seu sistema solar.</p>
            </header>

            <main className="flex-grow p-8">
                <section className="bg-white shadow-lg rounded-lg p-6 mb-8">
                    <h2 className="text-2xl font-semibold mb-4">1. Avaliação Inicial</h2>
                    <p>
                        O primeiro passo é entender o consumo de energia mensal. Se você consome, por exemplo, 400 kWh por mês, o
                        sistema solar necessário será de aproximadamente 2.67 kW (considerando 5 horas de sol/dia).
                    </p>
                </section>

                <section className="bg-white shadow-lg rounded-lg p-6 mb-8">
                    <h2 className="text-2xl font-semibold mb-4">2. Custos de Equipamentos</h2>
                    <p>
                        O preço dos equipamentos necessários para a instalação de um sistema solar varia de acordo com o tipo e
                        a marca:
                    </p>
                    <ul className="list-disc pl-6 mt-4">
                        <li><strong>Painéis Solares:</strong> De R$ 1.200 a R$ 2.500 por unidade.</li>
                        <li><strong>Inversor Solar:</strong> Entre R$ 3.000 e R$ 7.000.</li>
                        <li><strong>Estrutura de Montagem:</strong> De R$ 800 a R$ 2.500.</li>
                    </ul>
                </section>

                <section className="bg-white shadow-lg rounded-lg p-6 mb-8">
                    <h2 className="text-2xl font-semibold mb-4">3. Custo de Instalação</h2>
                    <p>O custo para a instalação pode variar, mas geralmente fica entre R$ 2.000 e R$ 5.000.</p>
                </section>

                <section className="bg-white shadow-lg rounded-lg p-6 mb-8">
                    <h2 className="text-2xl font-semibold mb-4">4. Custos Adicionais</h2>
                    <ul className="list-disc pl-6 mt-4">
                        <li><strong>Licenciamento e Documentação:</strong> R$ 500 a R$ 1.500.</li>
                        <li><strong>Manutenção (opcional):</strong> R$ 300 a R$ 800 anuais.</li>
                    </ul>
                </section>

                <section className="bg-white shadow-lg rounded-lg p-6 mb-8">
                    <h2 className="text-2xl font-semibold mb-4">5. Cálculo do Custo Total</h2>
                    <p>
                        O custo total estimado para um sistema solar de 2,67 kW pode variar entre R$ 17.100 e R$ 38.800, considerando
                        os itens descritos.
                    </p>
                </section>

                <section className="bg-white shadow-lg rounded-lg p-6 mb-8">
                    <h2 className="text-2xl font-semibold mb-4">6. Retorno do Investimento (ROI)</h2>
                    <p>
                        O retorno do investimento pode ser calculado com base na economia mensal. Por exemplo, se a economia for
                        de R$ 300 por mês, o ROI será de aproximadamente 7 anos, considerando um custo total de R$ 25.000.
                    </p>
                </section>

                <section className="bg-white shadow-lg rounded-lg p-6 mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Resumo do Orçamento</h2>
                    <table className="min-w-full table-auto text-left">
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
                </section>
            </main>

            <footer className="bg-gray-800 text-white p-4 text-center">
                <p>&copy; 2024 GIF Energy - Todos os direitos reservados.</p>
            </footer>
        </div>
    );
}
