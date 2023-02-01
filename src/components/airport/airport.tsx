import { Data } from "../../api/api"

type AirportProps = {
    data: Data
}

export const Airport = ({ data }: AirportProps) => {
    const { city, country, iata, latitude, name } = data
    return <div>
        <p> {city} </p> <p> {country} </p> <p> {iata} </p> <p> {name} </p> <p> {latitude} </p>
    </div>
}
