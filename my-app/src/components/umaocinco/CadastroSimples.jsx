import { useState } from "react";

function CadastroSimples() {
    const [usuario, setUsuario] = useState({ nome: '', email: '' });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setUsuario({
            ...usuario,
            [name]: value
        });
    }

    return (
        <div>

            <h1>Cadastro Simples</h1>

            <div>

                <label>Nome: </label>
                <input
                    type="text"
                    name="nome"
                    value={usuario.nome}
                    onChange={handleChange}
                />

            </div>

            <div>

                <label>Email: </label>
                <input
                    type="email"
                    name="email"
                    value={usuario.email}
                    onChange={handleChange}
                />

            </div>

            <h3>Dados Digitados:</h3>
            <p><strong>Nome:</strong> {usuario.nome}</p>
            <p><strong>Email:</strong> {usuario.email}</p>
            
        </div>
    )
}

export default CadastroSimples;