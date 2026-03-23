import Item from './Item';

function Lista({ dados, aoRemover }) {

  return (

    <ul>
      {dados.map((nome, index) => (
        <Item 
          key={index} 
          nome={nome} 
          onDelete={() => aoRemover(index)} 
        />
      ))}
    </ul>
    
  );
}

export default Lista;