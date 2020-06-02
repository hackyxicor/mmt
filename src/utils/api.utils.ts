import { SanatizeResposne, Objectify } from './common.utils';
const BASE_URL = "https://us-central1-mmt-interview.cloudfunctions.net/helloWorld";

export async function FetchHotels() {
    const result = await fetch(BASE_URL);
    const jsonParsed = await result.json();

    const response = SanatizeResposne(jsonParsed)

    return {
        dictionary: Objectify(response),
        default: response.map((item) => item.id)
    }
}