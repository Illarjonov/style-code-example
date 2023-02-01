import s from "./table-row.module.css"
type TableCaseProps = {
    name: string;
    iata: string;
    longitude: string;
    latitude: string;
}

export const TableCase = ({ name, iata, longitude, latitude }: TableCaseProps) => {
    return <div className={s.row}>
        <div className={s.nameIata}>
            <p> {name}  {iata && `& ${iata}` } </p>
        </div>
        <div>
            <div> {latitude} </div>
            <div> {longitude} </div>
        </div>

    </div>
}