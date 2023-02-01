import { Data } from "../../api/api";
import { TableCase } from "../UI/table-row/table-row";

type AirpotListProps = {
    data: Data[]
}
export const AirpotList = ({ data }: AirpotListProps) =>
    <div>
        <TableCase name="Name" iata="Code" latitude="lat" longitude="lng" />
        {
            data.map((item, index) =>
                <TableCase
                    key={index}
                    name={item.name}
                    iata={item.iata}
                    latitude={item.latitude}
                    longitude={item.longitude} />)
        }
    </div>
