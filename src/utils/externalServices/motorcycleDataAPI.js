import { getLocalStorage, setLocalStorage } from '../helpers.js';

const API_KEY = import.meta.env.VITE_MOTORCYCLE_API_KEY;
const URL = import.meta.env.VITE_MOTORCYCLE_URL;

let allMotorcycles = getLocalStorage("motorcycles") || [];

export async function getMotorcycleData(make, model, year) {
    let options = {
        method: 'GET',
        headers: { 'x-api-key': API_KEY }
    };

    try {
        const response = await fetch(URL + `?make=${make}&model=${model}&year=${year}`, options);
        
        // Check if the response is not successful
        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();

        // Check if the motorcycle data is unique
        const isUnique = !allMotorcycles.some(motorcycle => {
            const isDuplicate =
                motorcycle[0].make === data[0].make &&
                motorcycle[0].model === data[0].model &&
                motorcycle[0].year === data[0].year;
        
            console.log('Comparing:', motorcycle, 'with input:', { make, model, year }, 'Result:', isDuplicate);
        
            return isDuplicate;
        });
        

        if (isUnique) {
            allMotorcycles.push(data); // add data if unique
            setLocalStorage(`motorcycles`, allMotorcycles);
            return true;
        } else {
            alert('This motorcycle data already exists.');
            return false;
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        alert(`Failed to fetch data: ${error.message}`);
        return false;
    }
}
