import { useState } from 'react';

function ListaRemocao() {
    const [reNome, setReNome] = useState('');
    const [lista, setLista] = useState([]);

    const handleChange = (event) => {
        setReNome(event.target.value);
    };

    const adicionarNome = () => {
        if (reNome.trim() !== "") {
            setLista([...lista, reNome]);
            setReNome('');
        }
    };

    const removerNome = (indexParaRemover) => {
        const novaLista = lista.filter((_, index) => index !== indexParaRemover);

        setLista(novaLista);
    };

    return (
        <div>
            <h1>Lista com Remoção</h1>

            <div>
                <input
                    type="text"
                    placeholder="Digite um nome..."
                    value={reNome}
                    onChange={handleChange}
                />
                <button onClick={adicionarNome}>
                    Adicionar
                </button>
            </div>

            <h3>Nomes Cadastrados:</h3>

            <ul>
                {lista.map((nome, index) => (
                    <li key={index}>
                        {nome}
                        { }
                        <button
                            onClick={() => removerNome(index)}                        >
                            Remover
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaRemocao;