function Formulario({ valor, aoMudar, aoAdicionar }) {
  
  return (

    <div className="box">
      <input
        type="text"
        placeholder="Digite um nome..."
        value={valor}
        onChange={aoMudar}
      />

      <button onClick={aoAdicionar}>Adicionar</button>

    </div>
    
  );
}

export default Formulario; 