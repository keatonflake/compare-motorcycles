import { getLocalStorage, setLocalStorage } from '../helpers.js';

const API_KEY = import.meta.env.VITE_MOTORCYCLE_API_KEY;
const URL = import.meta.env.VITE_MOTORCYCLE_URL;

let motorcycles = getLocalStorage("motorcycles") || [];

// let motorcycleTitleString = '';

export async function getMotorcycleData(make, model, year) {
    let options = {
        method: 'GET',
        headers: { 'x-api-key': API_KEY }
    };

    try {
        const response = await fetch(URL + `?make=${make}&model=${model}&year=${year}`, options);
        const data = await response.json();
        // data.forEach(object => {
        //     console.log(object);
        // });
        motorcycles.push(data); // add data;
        setLocalStorage(`motorcycles`, motorcycles);
        // displayMotorcycle(currentIndex); 
    } catch (error) {
        console.error('Error fetching data:', error);
        alert(error);
    }
}
