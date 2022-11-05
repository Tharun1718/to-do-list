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
  
  console.log(items);

  return (
    <div className="App">
      <div className="container">
        <h1>To do list</h1>
      </div>
      <InputContainer addItems={addItems} />
      <div>
        <ul>
          {items.map((item,index)=>{
             return <ListItems key={index} text={item}/>
          })}
        </ul>
      </div>
    </div>
  );
}


export default App;
