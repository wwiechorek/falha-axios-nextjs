import axios from "axios"
export function getAPIClient(ctx) {
    const api = axios.create({})
    return api
}