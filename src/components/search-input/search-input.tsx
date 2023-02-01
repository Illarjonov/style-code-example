import { useCallback, useEffect, useState } from "react"
import { API, Data } from "../../api/api";
import React from "react";
import s from "./search-input.module.css";

type SearchInputProps = {
    setData: React.Dispatch<React.SetStateAction<Data[]>>;
}
// функция поиска для поисковой строки
export const SearchInput = ({ setData }: SearchInputProps) => {
    const [searchType, setSearchType] = useState<"name" | "code">("name")
    const [searchText, setSearchText] = useState("")

    const search = useCallback(() => {
        const name: string = searchType === "name" ? searchText : ""
        const code: string = searchType === "code" ? searchText : ""

        API.searchAirport(name, code)
            .then((res: any) => {
                if (res.status === 200) {
                    setData(res.data)
                }
            })
    }, [setData, searchType, searchText])

    // Задержка в 0.7 мс после окончания запроса, чтобы не спамить запросами
    useEffect(() => {
        const timeOutId = setTimeout(() => search(), 700)
        return () => clearTimeout(timeOutId)
    }, [searchText, search])

    return <>
        <input
            onChange={e => setSearchText(e.target.value)}
            placeholder="Send text. Input use debounce 0.7 ms"
            className={s.input} />
        <div className={s.buttons}>
            <div
                onClick={() => setSearchType("name")}
                style={{ backgroundColor: searchType === "name" ? "#ececec" : "" }}
                className={s.button}>
                Поиск по названию
            </div>
            <div
                onClick={() => setSearchType("code")}
                style={{ backgroundColor: searchType === "code" ? "#ececec" : "" }}
                className={s.button}>
                Поиск по коду аэропорта
            </div>
        </div>
    </>
}  
