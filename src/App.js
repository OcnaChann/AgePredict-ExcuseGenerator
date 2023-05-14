import './App.css';
import { useEffect, useState } from 'react';
import Axios from 'axios';

function App() {
  const [excuse, setExcuse] = useState('');
  const generateExcuse = (excuseType) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuseType}/`).then((res) => {
      setExcuse(res.data[0].excuse);
    });
  };

  const [name, setName] = useState('');
  const [predictedAge, setPredictedAge] = useState(null);
  const predictAge = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setPredictedAge(res.data);
    });
  };

  return (
 <div className="App">
  <div className ="container">
      <div className="predict-age-container">
        <h2>Predict Age from Api:</h2>
        <input
          placeholder="Enter your name"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <button onClick={predictAge}>Predict</button>
       <div className="predicted-age">
          {predictedAge && (
            <>
              <p>Name: {predictedAge.name}</p>
              <p>Predicted age: {predictedAge.age}</p>
              <p>Count: {predictedAge.count}</p>
            </>
          )}
        </div>
      </div>
     <div className="excuse-generator-container">
        <h2>Generates an Excuse</h2>
        <button onClick={() => generateExcuse('party')}>For Party</button>
        <button onClick={() => generateExcuse('family')}>For Family</button>
        <button onClick={() => generateExcuse('office')}>For Office</button>
        <div className="generated-excuse">
          {excuse && <p>{excuse}</p>}
        </div>
      </div>
  </div>
</div>
  );
}

export default App;
