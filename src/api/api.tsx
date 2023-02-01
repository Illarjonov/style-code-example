import * as axios from "axios"

const controller = new AbortController();

const apiURL = "https://airports-by-api-ninjas.p.rapidapi.com"

const instance = axios.default.create({
    baseURL: apiURL,
    signal: controller.signal
})

instance.defaults.headers.common["X-RapidAPI-Key"] = "4b3d50217bmsh5fd912f66f1e90fp112a84jsnd0835779ceda"
instance.defaults.headers.common["X-RapidAPI-Host"] = "airports-by-api-ninjas.p.rapidapi.com"

export interface Data {
    city: string;
    country: string;
    elevation_ft: string;
    iata: string;
    icao: string;
    latitude: string;
    longitude: string;
    name: string;
    region: string;
    timezone: string;
}


export const API = {
    async searchAirportByName(name?: string): Promise<any> {
        try {
            //query params обычно приходит одно из двух
            const queryName = name ? `name=${name}` : ""

            const url = `v1/airports?${queryName}&country=US`
            const req = await instance.get<Data[]>(url)
            return req
        } catch (error: any) {
            console.log(error.response)
        }
    },
    async searchAirportByIata(code?: string): Promise<any> {
        try {
            //query params обычно приходит одно из двух
            const queryCode = code ? `iata=${code}` : ""

            const url = `v1/airports?${queryCode}&country=US`
            const req = await instance.get<Data[]>(url)
            return req
        } catch (error: any) {
            console.log(error.response)
        }
    },
    async searchAirportByDefault(): Promise<any> {
        try {
            const url = `v1/airports?&country=US`
            const req = await instance.get<Data[]>(url)
            return req
        } catch (error: any) {
            console.log(error.response)
        }
    },
}
