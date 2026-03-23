import { useState } from 'react'

function Contador() {
    const [contador, setContador] = useState(0);

    const incrementar = () => {
        setContador(contador + 1);
    };

    const decrementar = () => {
        setContador(contador - 1);
    }

    return (  
        <div>

            <h1>Contador Interativo </h1>

            <p>Contagem: {contador}</p>

            <button onClick={incrementar}>
                Incrementar
            </button>

            <button onClick={decrementar}>
                Decrementar
            </button>
            
        </div>
    )
}

export default Contador;  