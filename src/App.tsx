import React, { useEffect, useState } from 'react';
import './App.css';
import { API, Data } from './api/api';

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
      fds
    </div>
  )
}

export default App
