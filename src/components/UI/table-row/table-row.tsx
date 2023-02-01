import s from "./table-row.module.css"
type TableCaseProps = {
    name: string;
    iata: string;
    longitude: string;
    latitude: string;
}
// элемент таблицы
export const TableRow = ({ name, iata, longitude, latitude }: TableCaseProps) => {
    const isIata = iata.length > 0 ? ` & ${iata}` : ''
    return <div className={s.row}>
        <div className={s.nameIata}>
            <p> {name + isIata}  </p>
        </div>
        <div>
            <div> {latitude} </div>
            <div> {longitude} </div>
        </div>

    </div>
}
