import axios from 'axios';

interface Usuario {
    nome: string;
    email: string;
    senha: string;
}

const cadastrarUsuario = async (usuario: Usuario) => {
    try {
        const response = await axios.post('http://localhost:8080/api/cadastro', usuario);
        console.log(response.data); // Exibe a resposta do backend
        alert('Usuário cadastrado com sucesso!');
    } catch (error) {
        console.error('Erro ao cadastrar usuário:', error);
        alert('Ocorreu um erro no cadastro.');
    }
};
