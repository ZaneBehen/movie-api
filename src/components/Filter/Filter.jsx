import React, {useState} from 'react';
import './Filter.css';




const Filter = () => {
    const [selects, setSelects]=useState();
    return (
        <div>       
            {localStorage.setItem("search", Object.values({selects}))}
        <select
        id='filter' 
        onChange={e=>setSelects(e.target.value)} 
        >
         <option value ="movie">Choose TV or Film</option>
         <option value="movie">Movie </option>
         <option value="tv">TV</option>
         </select>
        </div>
    );
}

export default Filter;
 