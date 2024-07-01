import { getLocalStorage } from './helpers.js';
import { dataSummary } from './externalServices/geminiAPI.js';

let data = getLocalStorage(`motorcycle-data`);
let dataString = JSON.stringify(data);
console.log(dataString);


let prompt = `Here is data for 1 or more motorcycles. If there is data for more than one motorcycle,
please give a comparison between them and why an individual might choose one over the other. 
If data for only one motorcycle is provided please give a very short summary of that motorcycle and why an individual would choose it: ${dataString}`

dataSummary(prompt);