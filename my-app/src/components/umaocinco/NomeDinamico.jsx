import { useState } from 'react';

function NomeDinamico() {

    const [nome, setNome] = useState("");

    const capturarTexto = (evento) => {
        setNome(evento.target.value);
    };

    return (
        <div>

            <h1>Nome Dinamico</h1>

            <h3>Digite seu nome:</h3>

            <input
                type="text"
                placeholder="Escreva algo..."
                onChange={capturarTexto}
            />

            <p>O nome digitado é: <strong>{nome}</strong></p>
            
        </div>
    );
}

export default NomeDinamico;