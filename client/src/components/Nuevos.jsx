import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Nuevos() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/new') // url donde el sevidor me va a devolver la data //url de donde pido la data. la ruta que designe
	//le pido la data a esta ruta del servidor 
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

export default Nuevos;