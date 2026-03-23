import './App.css'

import { useState } from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Contador from './components/umaocinco/Contador';
import NomeDinamico from './components/umaocinco/NomeDinamico';
import CadastroSimples from './components/umaocinco/CadastroSimples';
import ListaNomes from './components/umaocinco/ ListaNomes';
import ListaRemocao from './components/umaocinco/ ListaRemocao';

import Formulario from './components/formulario/Formulario';
import Lista from './components/formulario/Lista';

import SistemaCadastroCompleto from './components/sistemacadastrocompleto/SistemaCadastroCompleto';

import ContadorHistorico from './components/contadorhistorico/ContadorHistorico';

import SistemaTarefas from './components/sistematarefas/SistemaTarefas';

function App() {

  const [reNome, setReNome] = useState('');
  const [lista, setLista] = useState([]);

  const handleChange = (e) => setReNome(e.target.value);

  const adicionarNome = () => {
    if (reNome.trim() !== "") {
      setLista([...lista, reNome]);
      setReNome('');
    }
  };

  const removerNome = (indexParaRemover) => {
    setLista(lista.filter((_, index) => index !== indexParaRemover));
  };

  return (
    <>

      <div>
        <div>
          <h1> Lista de Exercícios – React </h1>
        </div>

        <hr class="linha-estilizada" />

        <div>
          <Contador />
        </div>

        <hr class="linha-estilizada" />

        <div>
          <NomeDinamico />
        </div>

        <hr class="linha-estilizada" />

        <div>
          <CadastroSimples />
        </div>

        <hr class="linha-estilizada" />

        <div>
          <ListaNomes />
        </div>

        <hr class="linha-estilizada" />

        <div>
          <ListaRemocao />
        </div>
      </div>

      <hr class="linha-estilizada" />

      <div>
        <h1> Formulario </h1>

        <Formulario
          valor={reNome}
          aoMudar={handleChange}
          aoAdicionar={adicionarNome}
        />

        <Lista
          dados={lista}
          aoRemover={removerNome}
        />

      </div >

      <hr class="linha-estilizada" />

      <div>
        <SistemaCadastroCompleto />
      </div>

      <hr class="linha-estilizada" />

      <div>
        <ContadorHistorico />
      </div>

      <hr class="linha-estilizada" />

      <div>
        <SistemaTarefas />
      </div>

      <hr class="linha-estilizada" />


    </>
  )
}

export default App;