import React, { useEffect, useState } from 'react';
import './App.css';
import { API, Data } from './api/api';
import { Airport } from './components/airport/airport';
import { SearchInput } from './components/search-input/search-input';

function App() {
  const [data, setData] = useState<Data[]>([])

  const fetchByDefault = () => {
    API.searchAirport()
      .then((res: any) => {
        if (res.status === 200) {
          setData(res.data)
        }
      })
  }

  useEffect(fetchByDefault, [])

  return (
    <div className="App">
      <div>
        <SearchInput/>
      </div>
      <div>
        {data.map((item, index) => <Airport data={item} key={index} />)}
      </div>
    </div>
  )
}
export default App
