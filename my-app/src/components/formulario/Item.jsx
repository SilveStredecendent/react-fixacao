function Item({ nome, onDelete }) {

  return (

    <li>
      {nome} 
      <button onClick={onDelete}>Remover</button>
    </li>
    
  );

}

export default Item;