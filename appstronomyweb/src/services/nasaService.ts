const API_KEY = import.meta.env.VITE_NASA_API_KEY;
const BASE_URL = import.meta.env.VITE_NASA_API_BASE_URL;

if (!API_KEY || !BASE_URL) {
    throw new Error("Las variables de entorno no están configuradas correctamente.");
}

export const fetchNasaData = async (
    endpoint: string,
    params: Record<string, string> = {}
): Promise<any> => {
    try {
        const url = new URL(`${BASE_URL}/${endpoint}`);
        url.search = new URLSearchParams({
            ...params,
            api_key: API_KEY,
        }).toString();

        const response = await fetch(url.toString());
        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching data from NASA API:", error);
        throw error;
    }
};
