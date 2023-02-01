import * as axios from 'axios'

const apiURL = 'https://airports-by-api-ninjas.p.rapidapi.com'

const instance = axios.default.create({
    baseURL: apiURL,
    headers: {
        Accept: 'application/json',
        'X-RapidAPI-Key': '4b3d50217bmsh5fd912f66f1e90fp112a84jsnd0835779ceda',
        'X-RapidAPI-Host': 'airports-by-api-ninjas.p.rapidapi.com'
    },
})

export interface AxiosResponse {
    data: any;
    status: number;
    statusText: string;
    headers: Record<string, string>;
    config: axios.AxiosRequestConfig<any>;
    request?: any;
}

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
    async searchAirport(name?: string, code?: string, offset?: number) {
        try {
            //query params
            const queryName = name ? `?name=${name}` : ''
            const queryCode = code ? `?iata=${code}` : ''
            const queryOffset = offset ? `&offset=${offset}` : ''

            const url = `v1/airports?country=US${queryName}${queryCode}${queryOffset}`
            const req = instance.get<any>(url)
            return req
        } catch (error: any) {
            console.log(error.response)
        }
    },
}