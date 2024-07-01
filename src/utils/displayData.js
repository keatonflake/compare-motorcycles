import { MotorcycleCard } from "./MotorcycleCard.js";
import { getLocalStorage} from "./helpers.js";

export function displayAllCards() {
  let data = getLocalStorage("motorcycles");
  console.log(data);

  for (let i = 0; i < data.length; i++) {
    let motorcycleCard = new MotorcycleCard(data, i);
    motorcycleCard.createMotorcycleCard();
  }
}

export function displayNewCard(){
  let motorcycleCard = new MotorcycleCard(data, i);
  motorcycleCard.createMotorcycleCard();
}

// import { getLocalStorage } from "./helpers.js";
// import { getImageURL } from "./externalServices/googleImageAPI.js";

// let currentIndex = 0;

// export function createMotorcycleCard() {
// data.forEach((motorcycleResults) => {
//     let motorcycle = motorcycleResults[currentIndex];

//     let motorcycleContainer = document.createElement("div");
//     motorcycleContainer.setAttribute("id", `motorcycleContainer(${currentIndex})`);
//     let motorcycleHeader = document.createElement("div");
//     motorcycleHeader.setAttribute("id", "motorcycleHeader");
//     motorcycleHeader.classList.add("rounded");
//     let title = document.createElement("h2");
//     let year = document.createElement("h3");
//     let previousButton = document.createElement("button");
//     previousButton.setAttribute("id", "previousButton");
//     let pEl = document.createElement("p");
//     let nextButton = document.createElement("button");
//     nextButton.setAttribute("id", "nextButton");
//     let imageContainer = document.createElement("div");
//     imageContainer.setAttribute("id", "imageContainer");
//     imageContainer.classList.add("rounded");
//     let motorcycleImage = document.createElement("img");
//     motorcycleImage.setAttribute("id", "motorcycleImage");
//     let detailsButton = document.createElement("button");
//     detailsButton.setAttribute("id", "detailsButton");
//     detailsButton.classList.add("rounded");
//     let motorcycleDetails = document.createElement("div");
//     motorcycleDetails.setAttribute("id", "motorcycleDetails");

//     title.textContent = `${motorcycle.make} ${motorcycle.model}`;
//     year.textContent = `${motorcycle.year}`;
//     previousButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left" viewBox="0 0 16 16"><path d="M10 12.796V3.204L4.519 8zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753" /></svg>`;
//     pEl.textContent = "More Editions";
//     nextButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16"><path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753" /></svg>`;
//     detailsButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"/></svg>`;

//     motorcycleTitleString = `${motorcycle.make} ${motorcycle.model} ${motorcycle.year}`;
//     motorcycleImage.src = searchImageFor(motorcycleTitleString);
//     getImageURL(motorcycleTitleString).then((url) => {
//       motorcycleImage.src = url;
//     });
//     imageContainer.appendChild(motorcycleImage);
//     console.log(getImageURL(motorcycleTitleString));

//     motorcycleContainer.appendChild(motorcycleHeader);
//     motorcycleHeader.appendChild(title);
//     motorcycleHeader.appendChild(year);
//     motorcycleHeader.appendChild(previousButton);
//     motorcycleHeader.appendChild(pEl);
//     motorcycleHeader.appendChild(nextButton);
//     motorcycleHeader.appendChild(imageContainer);
//     motorcycleHeader.appendChild(detailsButton);
//     motorcycleContainer.appendChild(motorcycleDetails);
//     document
//       .querySelector("#compareContainer")
//       .appendChild(motorcycleContainer);

//     for (let key in motorcycle) {
//       if (motorcycle.hasOwnProperty(key)) {
//         let detailItem = document.createElement("li");
//         detailItem.innerHTML = `<strong>${key.replace(/_/g, " ")}</strong>: ${
//           motorcycle[key]
//         }`;
//         motorcycleDetails.appendChild(detailItem);
//       }
//     }

//     document.getElementById('nextButton').addEventListener('click', () => {
//         motorcycleDetails.innerHTML = '';
//         currentIndex = (currentIndex + 1) % motorcycleResults.length;
//         createMotorcycleCard(currentIndex);
//     });

//     document.getElementById('previousButton').addEventListener('click', () => {
//         motorcycleDetails.innerHTML = '';
//         if (currentIndex === 0) {
//             return;
//         }
//         else {
//         currentIndex = (currentIndex - 1) % motorcycleResults.length;
//         createMotorcycleCard(currentIndex);
//         }
//     });
//   });
// }

// function createMo(index) {
//     const motorcycle = motorcycles[index];

//     console.log(motorcycle);
//     if (motorcycle) {
//         motorcycleDetails.innerHTML = '';

//         let title = motorcycleHeader.querySelector('h2');
//         let year = motorcycleHeader.querySelector('h3');
//         title.textContent = `${motorcycle.make} ${motorcycle.model}`;
//         year.textContent = `${motorcycle.year}`;

//         motorcycleTitleString = `${motorcycle.make} ${motorcycle.model} ${motorcycle.year}`;

//         let detailsList = document.createElement('ul');
//         detailsList.classList.add('details');

//         for (let key in motorcycle) {
//             if (motorcycle.hasOwnProperty(key)) {
//                 let detailItem = document.createElement('li');
//                 detailItem.innerHTML = `<strong>${key.replace(/_/g, ' ')}</strong>: ${motorcycle[key]}`;
//                 detailsList.appendChild(detailItem);
//             }
//         }

//         motorcycleDetails.appendChild(detailsList);
//     }
// }

// document.getElementById('nextButton').addEventListener('click', () => {
//     motorcycleDetails.innerHTML = '';
//     currentIndex = (currentIndex + 1) % motorcycles.length;
//     createMo(currentIndex);
// });

// document.getElementById('previousButton').addEventListener('click', () => {
//     motorcycleDetails.innerHTML = '';
//     if (currentIndex === 0) {
//         return;
//     }
//     else {
//     currentIndex = (currentIndex - 1) % motorcycles.length;
//     createMo(currentIndex);
//     }
// });
