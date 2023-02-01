import { useCallback, useEffect, useState } from "react"
import { API, Data } from "../../api/api";
import React from "react";
import s from "./search-input.module.css";
import { ButtonSelectType } from "../UI/button-type-select/button-type-select";
import { AxiosResponse } from "axios";

type SearchInputProps = {
    defaultData: Data[];
    setData: React.Dispatch<React.SetStateAction<Data[]>>;
}

// функция поиска для поисковой строки
export const SearchInput = ({ setData, defaultData }: SearchInputProps) => {
    const [searchType, setSearchType] = useState<"name" | "iata">("name")
    const [searchText, setSearchText] = useState("")

    const search = useCallback(async () => {
        //фильтрует дефолтный массив по совпадению 
        const filterDefaultDataBySearchText = () => {
            return defaultData
                .filter((obj: Data) => obj[searchType]
                    .toLowerCase()
                    .indexOf(searchText) > -1
                )
        }

        // Если есть совпадения, отображает, если совпадений нет, делает запрос на сервер по searchType
        if (filterDefaultDataBySearchText().length > 0) {
            setData(filterDefaultDataBySearchText())
        } else {
            if (searchType === "name") {
                await API.searchAirportByName(searchText)
                    .then((res: AxiosResponse<Data[]>) => {
                        if (res.status === 200 && res && res.data) {
                            setData(res.data)
                        }
                    })
            }
            if (searchType === "iata") {
                // если iata !== 3, ретурнит 400
                if (searchText.length === 3) {
                    await API.searchAirportByIata(searchText)
                        .then((res: AxiosResponse<Data[]>) => {
                            if (res.status === 200 && res && res.data) {
                                setData(res.data)
                            }
                        })
                } else {
                    setData([])
                }
            }
        }
    }, [defaultData, setData, searchType, searchText])

    // Задержка в 0.7 мс после окончания запроса, чтобы не спамить запросами
    useEffect(() => {
        //если пустая строка поиска, отображать дефолтные данные
        const timeOutId = setTimeout(() => searchText.length > 0 ? search() : setData([...defaultData]), 700)
        return () => clearTimeout(timeOutId)
    }, [searchText, search, defaultData, setData])

    return <>
        <input
            onChange={e => setSearchText(e.target.value)}
            placeholder="Send text. Input use debounce 0.7 ms"
            className={s.input} />
        <div className={s.buttons}>
            <>
                <ButtonSelectType
                    type="name"
                    name="Поиск по названию"
                    searchType={searchType}
                    setSearchType={setSearchType}
                />
                <ButtonSelectType
                    type="iata"
                    name="Поиск по коду"
                    searchType={searchType}
                    setSearchType={setSearchType}
                />
            </>

        </div>
    </>
}  
