// Constants
const API_KEY = import.meta.env.VITE_GOOGLE_SEARCH_API_KEY;
const ENGINE_ID = import.meta.env.VITE_GOOGLE_SEARCH_ENGINE_ID;
// let motorcycleSearch = "";
const URL = `https://customsearch.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${ENGINE_ID}`;

// Utility function to wait for DOMContentLoaded event
// function domContentLoaded() {
//     return new Promise(resolve => {
//         if (document.readyState === 'loading') {
//             document.addEventListener('DOMContentLoaded', resolve);
//         } else {
//             resolve();
//         }
//     });
// }

// Function to search images for a specific motorcycle
// export function searchImageFor(motorcycle){
//     motorcycleSearch = motorcycle;
//     fetchImagesWhenReady();
// }

// Function to fetch motorcycle images and return the image URL
export async function getMotorcycleImages(motorcycleSearch) {
    try {
        const response = await fetch(URL + `&q=${motorcycleSearch}&searchType=image`);
        const data = await response.json();
        // console.log(data);
        return data.items[0].link; // Return the URL directly
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Ensure any errors are propagated
    }
}

// Function to fetch images when DOM is ready
// export async function fetchImagesWhenReady() {
//     await domContentLoaded();
//     return getMotorcycleImages();
// }

// Function to get the image URL
// export async function getImageURL() {
//     const imageURL = await fetchImagesWhenReady();
//     return imageURL;
// }
