import { useState } from "react";

function SistemaCadastroCompleto() {

    const [usuario, setUsuario] = useState({ nome: '', email: '' })
    const [lista, setLista] = useState([]);

    const salvar = () => {
        if (usuario.nome.trim() === "") {
            return;
        }
    }
    
    const handleChange = (ev) => {
        const { name, value } = ev.target;
        setUsuario({ ...usuario, [name]: value });
    };

    const adicionarNome = () => {
        if (usuario.nome.trim() !== "") {
            setLista([...lista, usuario]);
            setUsuario({ nome: '', email: '' });
        }
    };

    const removerUsuario = (indexParaRemover) => {
        const novaLista = lista.filter((_, index) => index !== indexParaRemover);
        setLista(novaLista);
    };



    return (
        <div>
            <h1>Lista de Cadastros</h1>

            <div>
                <input
                    type="text"
                    name="nome"
                    placeholder="Digite um nome..."
                    value={usuario.nome}
                    onChange={handleChange}
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Digite um email..."
                    value={usuario.email}
                    onChange={handleChange}
                />

                <button onClick={adicionarNome}>
                    Adicionar
                </button>
                
            </div>

            <h3>Cadastros:</h3>

            <ul>
                {lista.map((usuario, index) => (
                    <li key={index}>
                        {usuario.nome} - {usuario.email}
                        <button onClick={() => removerUsuario(index)}>
                            Remover
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SistemaCadastroCompleto;