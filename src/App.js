import { useState } from 'react';
import './App.css';
import InputContainer from './components/InputContainer';
import ListItems from './components/ListItemsContainer';

function App() {

  const[items,setItems] = useState([]);

  const addItems = (input) =>{
    setItems((prevItem)=>{
      return [...prevItem,input];
    });
  };
  
  const deleteItems = ({id}) =>{
    setItems((prevItem)=>{
      return items.filter((item, index) => {
        return index !== id;
      })
    });
  }

  return (
    <div className="App">
      <div className="container">
        <h1>To do list</h1>
      </div>
      <InputContainer addItems={addItems} />
      <div>
        <ul>
          {items.map((item,index)=>{
             return <ListItems key={index} text={item} deleteItems={deleteItems} id={index}/>
          })}
        </ul>
      </div>
    </div>
  );
}


export default App;
