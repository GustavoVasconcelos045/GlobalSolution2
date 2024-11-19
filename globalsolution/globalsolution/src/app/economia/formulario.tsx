"use client";

import React, { useState } from 'react';
import { cadastrarUsuario } from './src/app/api/apiService'; // Ajuste o caminho conforme necessário

export default function CadastroPage() {
    const [form, setForm] = useState({ nome: '', email: '', senha: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        cadastrarUsuario(form);
    };

    return (
        <div className="p-6 max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-4">Cadastro</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="nome" className="block font-semibold mb-2">Nome</label>
                    <input
                        id="nome"
                        name="nome"
                        type="text"
                        value={form.nome}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block font-semibold mb-2">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="senha" className="block font-semibold mb-2">Senha</label>
                    <input
                        id="senha"
                        name="senha"
                        type="password"
                        value={form.senha}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">Cadastrar</button>
            </form>
        </div>
    );
}
