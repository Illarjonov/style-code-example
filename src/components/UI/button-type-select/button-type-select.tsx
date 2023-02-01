import s from './button-type-select.module.css'
import React from 'react'
type ButtonType = {
    searchType: "name" | "iata";
    setSearchType: React.Dispatch<React.SetStateAction<"name" | "iata">>;
    type: "name" | "iata";
    name: string;
}

const ButtonSelect = ({ searchType, setSearchType, type, name }: ButtonType) => {
    return <div
        onClick={() => setSearchType(type)}
        style={{ backgroundColor: searchType === type ? "#ececec" : "" }}
        className={s.button}>
        {name}
    </div>
}
export const ButtonSelectType = React.memo(ButtonSelect)
