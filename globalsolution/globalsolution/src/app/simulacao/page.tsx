"use client";

import React, { useState } from "react";
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";

const Simulacao: React.FC = () => {
  const [kwh, setKwh] = useState<number>(0);
  const [precoKwh, setPrecoKwh] = useState<number>(0);
  const [economia, setEconomia] = useState<number>(0);

  const calcularEconomia = () => {
    setEconomia(kwh * precoKwh);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Head>
        <title>Simulação de Economia de Energia</title>
      </Head>

      <Header />

      <main className="flex-1 p-8">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-3xl font-semibold text-center mb-6">
            Calculadora de Economia de Energia
          </h1>
          
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium">Consumo de energia (kWh):</label>
            <input
              type="number"
              value={kwh}
              onChange={(e) => setKwh(Number(e.target.value))}
              className="border border-gray-300 p-3 w-full rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium">Preço do kWh (R$):</label>
            <input
              type="number"
              value={precoKwh}
              onChange={(e) => setPrecoKwh(Number(e.target.value))}
              className="border border-gray-300 p-3 w-full rounded-md"
            />
          </div>

          <div className="text-center">
            <button
              onClick={calcularEconomia}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-500"
            >
              Calcular Economia
            </button>
          </div>

          {economia > 0 && (
            <p className="mt-4 text-green-600 text-center text-xl font-medium">
              Economia durante o mês: R$ {economia.toFixed(2)}
            </p>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Simulacao;
