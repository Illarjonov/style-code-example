import React, { useEffect, useState } from "react";
import "./App.css";
import { API, Data } from "./api/api";
import { SearchInput } from "./components/search-input/search-input";
import { AirpotList } from "./components/airport-list/airport-list";

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
        <SearchInput setData={setData}/>
        <AirpotList data={data} />
    </div>
  )
}
export default App
