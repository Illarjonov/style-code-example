import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import { API, Data } from "./api/api";
import { SearchInput } from "./components/search-input/search-input";
import { AirportList } from "./components/airport-list/airport-list";
import { AxiosResponse } from "axios";

function App() {
  const [data, setData] = useState<Data[]>([])
  const [defaultData, setDefaultData] = useState<Data[]>([])

  const fetchByDefault = useCallback(async () => { // Первый поиск по дефолту
    await API.searchAirportByDefault()
      .then((res: AxiosResponse<Data[]>) => {
        if (res.status === 200 && res && res.data) {
          setDefaultData(res.data)
          setData(res.data)
        }
      })
  }, [setDefaultData, setData])

  useEffect(() => {
    fetchByDefault()
  }, [fetchByDefault])

  return (
    <div className="App">
      <SearchInput defaultData={defaultData} setData={setData} />
      <AirportList data={data} />
    </div>
  )
}
export default App
