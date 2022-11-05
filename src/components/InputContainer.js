import React, { useState } from 'react';

function InputContainer({addItems}){

    const[inputText, setInputText] = useState("")

    return(
        <div>
            <input 
               type="text" 
               onChange={(event)=>setInputText(event.target.value)}
               value={inputText}
            />
            <button
               onClick={()=>{
                 addItems(inputText);
                 setInputText("");
               }}
            >
              Add
            </button>
        </div>
    )
}

export default InputContainer;
