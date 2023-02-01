import React, { useEffect, useState } from 'react';
import './App.css';
import { API, Data } from './api/api';
import { Airport } from './components/airport/airport';

function App() {
  const [data, setData] = useState<Data[]>([])

  useEffect(() => {
    API.searchAirport() //fetch by default
      .then((res: any) => {
        if (res.status === 200) {
          setData(res.data)
        }
      })
  }, [])

  return (
    <div className="App">
      
      <div>
        {data.map((item, index) => <Airport data={item} key={index} />)}
      </div>
    </div>
  )
}
export default App
