import { useState } from "react";

function SistemaTarefas() {

    const [tarefa, setTarefa] = useState("");
    const [lista, setLista] = useState([]);
    const handleChange = (evento) => {
        setTarefa(evento.target.value);
    };

    const adicionar = () => {
        if (tarefa.trim() === "") return;
        setLista([...lista, tarefa]);
        setTarefa("");
    };

    const remover = (indexParaRemover) => {
        const novaLista = lista.filter((_, index) => index !== indexParaRemover);
        setLista(novaLista);
    };

    return (
        <div>
            <h1>Lista de Tarefas</h1>

            <div>
                <input
                    type="text"
                    placeholder="Qual a tarefa:"
                    value={tarefa}
                    onChange={handleChange}
                />
                <button onClick={adicionar}>
                    Adicionar
                </button>
            </div>

            <h3>Tarefas:</h3>

            <ul>
                {lista.map((tarefa, index) => (
                    <li key={index}>
                        {tarefa}
                        <button onClick={() => remover(index)}>
                            Remover
                        </button>
                    </li>
                ))}
            </ul>

            {lista.length > 0 && (
                <p>Você tem {lista.length} tarefas cadastradas</p>
            )}
        </div>
    );
}

export default SistemaTarefas;