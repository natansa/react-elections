import React, { useState, useEffect } from 'react';
import Select from './components/Select';
import ElectionResults from './components/ElectionResults';
import axios from 'axios';

function App() {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/cities').then((response) => {
      setCities(response.data);
    });
  }, []);

  return (
    <div className="App">
      <h1>React Elections</h1>
      <Select cities={cities} onSelectCity={setSelectedCity} />
      {selectedCity && <ElectionResults cityId={selectedCity} />}
    </div>
  );
}

export default App;
