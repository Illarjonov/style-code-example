import { Data } from "../../api/api";
import { TableRow } from "../UI/table-row/table-row";

type AirpotListProps = {
    data: Data[]
}
export const AirportList = ({ data }: AirpotListProps) =>
    <div>
        <TableRow name="Name" iata="Code" latitude="lat" longitude="lng" />
        {
            data.map((item) =>
                <TableRow
                    key={item.name + item.iata}
                    name={item.name}
                    iata={item.iata}
                    latitude={item.latitude}
                    longitude={item.longitude} />)
        }
    </div>
