import './App.css';
import {useEffect, useState } from 'react';
import Axios  from 'axios';

function App() {
  const [name, setName] = useState('');
  const [PredictedAge , setPredictedAge] = useState(null);
  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res)=> {
      setPredictedAge(res.data);
    });
  };
 
  return (
    <div className="App">
       <input placeholder='Enter name'  onChange={(event) => {
        setName(event.target.value);}}/>
       <button onClick={fetchData}>Predict Age</button>
       <h1>name: {PredictedAge?.name} </h1>
       <h1>Predicted age: {PredictedAge?.age} </h1>
       <h1>count: {PredictedAge?.count} </h1>
    </div>
  );
}

export default App;
