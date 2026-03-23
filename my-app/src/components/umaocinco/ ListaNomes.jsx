import { useState } from 'react';

function ListaNomes() {

    const [novoNome, setNovoNome] = useState('');
    
    const [lista, setLista] = useState([]);

    const handleChange = (event) => {
        setNovoNome(event.target.value);
    };

    const adicionarNome = () => {
        if (novoNome.trim() !== "") {
            setLista([...lista, novoNome]);
            setNovoNome('');
        }
    };

    return (
        <div>

            <h1>Lista de Nomes</h1>

            <div>

                <input
                    type="text"
                    placeholder="Digite um nome..."
                    value={novoNome}
                    onChange={handleChange}
                />
                <button onClick={adicionarNome}>
                    Adicionar
                </button>

            </div>

            <h3>Nomes Cadastrados:</h3>

            <ul>
                {lista.map((nome, index) => (
                    <li key={index}>{nome}</li>
                ))}
            </ul>

        </div>
    );
}

export default ListaNomes;