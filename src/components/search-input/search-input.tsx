import { useEffect, useState } from "react"
import s from './search-input.module.scss'

export const SearchInput = () => {
    const [searchText, setSearchText] = useState('')
    
    useEffect(() => {
        const timeOutId = setTimeout(() => console.log(searchText), 700)
        return () => clearTimeout(timeOutId)
    }, [searchText])

    return <>
        <input
            onChange={e => setSearchText(e.target.value)}
            placeholder="Send text. Input use debounce 0.7 ms"
            className={s.input} />
    </>
}  
