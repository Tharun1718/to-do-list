import React from 'react';

function ListItems({text,deleteItems,id}){
    return(
        <div onClick={()=>{deleteItems({id})}}>
          <li>{text}</li>
        </div>
    )
};

export default ListItems;