import Head from 'next/head'; 
import Header from '../components/header'; 
import Footer from '../components/footer'; 

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
                <section className="bg-white shadow-lg rounded-lg p-4 sm:p-6 mb-8">
                    <h2 className="text-xl sm:text-2xl font-semibold mb-4">1. Avaliação Inicial</h2>
                    <p>
                        O primeiro passo é entender o consumo de energia mensal. Se você consome, por exemplo, 400 kWh por mês, o
                        sistema solar necessário será de aproximadamente 2.67 kW (considerando 5 horas de sol/dia).
                    </p>
                </section>

                <section className="bg-white shadow-lg rounded-lg p-4 sm:p-6 mb-8">
                    <h2 className="text-xl sm:text-2xl font-semibold mb-4">2. Tipos de Sistemas Solares</h2>
                    <p className="mb-4">
                        Existem dois tipos principais de sistemas de energia solar, cada um com diferentes características e custos associados:
                    </p>
                    <ul className="list-disc pl-4 sm:pl-6 text-sm sm:text-base">
                        <li>
                            <strong>On-Grid:</strong> Este sistema está conectado à rede elétrica e é ideal para locais com
                            acesso confiável à rede. Ele permite vender o excesso de energia gerada para a concessionária,
                            reduzindo sua conta de luz. Não funciona em caso de falta de energia da rede.
                        </li>
                        <li>
                            <strong>Off-Grid:</strong> Este sistema é independente da rede elétrica, utilizando baterias para
                            armazenar energia. É ideal para locais remotos ou onde a energia da rede não é confiável.
                            Geralmente é mais caro devido ao custo das baterias.
                        </li>
                    </ul>
                </section>

                <section className="bg-white shadow-lg rounded-lg p-4 sm:p-6 mb-8">
                    <h2 className="text-xl sm:text-2xl font-semibold mb-4">3. Custos de Sistemas On-Grid</h2>
                    <ul className="list-disc pl-4 sm:pl-6 text-sm sm:text-base">
                        <li><strong>Painéis Solares:</strong> De R$ 1.200 a R$ 2.500 por unidade.</li>
                        <li><strong>Inversor On-Grid:</strong> Entre R$ 3.000 e R$ 6.000.</li>
                        <li><strong>Estrutura de Montagem:</strong> De R$ 800 a R$ 2.500.</li>
                        <li><strong>Instalação:</strong> De R$ 2.000 a R$ 5.000.</li>
                        <li><strong>Licenciamento e Documentação:</strong> De R$ 500 a R$ 1.500.</li>
                    </ul>
                </section>

                <section className="bg-white shadow-lg rounded-lg p-4 sm:p-6 mb-8">
                    <h2 className="text-xl sm:text-2xl font-semibold mb-4">4. Custos de Sistemas Off-Grid</h2>
                    <ul className="list-disc pl-4 sm:pl-6 text-sm sm:text-base">
                        <li><strong>Painéis Solares:</strong> De R$ 1.200 a R$ 2.500 por unidade.</li>
                        <li><strong>Inversor Off-Grid:</strong> Entre R$ 4.000 e R$ 10.000.</li>
                        <li><strong>Baterias:</strong> De R$ 1.500 a R$ 5.000 por unidade (a quantidade depende do consumo).</li>
                        <li><strong>Estrutura de Montagem:</strong> De R$ 800 a R$ 2.500.</li>
                        <li><strong>Instalação:</strong> De R$ 3.000 a R$ 7.000.</li>
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
                                    <td className="px-4 py-2">Inversor Solar (On-Grid)</td>
                                    <td className="px-4 py-2">R$ 3.000 a R$ 6.000</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2">Inversor Solar (Off-Grid)</td>
                                    <td className="px-4 py-2">R$ 4.000 a R$ 10.000</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2">Baterias (para Off-Grid)</td>
                                    <td className="px-4 py-2">R$ 1.500 a R$ 5.000 por unidade</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2">Estrutura de Montagem</td>
                                    <td className="px-4 py-2">R$ 800 a R$ 2.500</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2">Instalação</td>
                                    <td className="px-4 py-2">R$ 2.000 a R$ 7.000</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2">Licenciamento e Documentação</td>
                                    <td className="px-4 py-2">R$ 500 a R$ 1.500</td>
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
