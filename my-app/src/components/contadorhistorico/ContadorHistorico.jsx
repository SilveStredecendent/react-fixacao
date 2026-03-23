import { useState } from "react";

function ContadorHistorico() {

    const [contador, setContador]   = useState(0);
    const [historico, setHistorico] = useState([]);

    const incrementar = () => {
        const novoValor = contador + 1;
        setContador(novoValor);
        setHistorico([...historico, novoValor]);
    };

    return (
        <div>

            <h1>Contador com Histórico</h1>

            <p>Valor atual: {contador}</p>

            <button onClick={incrementar}>Incrementar</button>

            <h3>Histórico:</h3>

            <ul>
                {historico.map((valor, index) => (
                    <li key={index}>{valor}</li>
                ))}
            </ul>

        </div>
    )
}

export default ContadorHistorico;