import { getMotorcycleImages } from "./externalServices/googleImageAPI";
import { getStorageCount, getLocalStorage, setLocalStorage } from "./helpers";

export class MotorcycleCard {
  constructor(data, dataIndex) {
    this.data = data;
    this.dataIndex = dataIndex;
    this.editionIndex = 0;
    this.cardStorageCount = getStorageCount();
    // this.cardCount = this.cardCount;
    this.motorcycleTitleString = "";
    this.cardPlacement;
  }

  createMotorcycleCard() {
    let motorcycle = this.data[this.dataIndex][this.editionIndex]

    // let cardPlacement;
    let motorcycleCardOne = document.getElementById("motorcycleCardOne");
    let motorcycleCardTwo = document.getElementById("motorcycleCardTwo");
    let motorcycleCardThree = document.getElementById("motorcycleCardThree");
    let motorcycleCardFour = document.getElementById("motorcycleCardFour");

    switch (this.dataIndex) {
      case 0:
        this.cardPlacement = motorcycleCardOne;
        this.cardPlacement.classList.remove("hide");
        break;
      case 1:
        this.cardPlacement = motorcycleCardTwo;
        this.cardPlacement.classList.remove("hide");
        break;
      case 2:
        this.cardPlacement = motorcycleCardThree;
        this.cardPlacement.classList.remove("hide");
        break;
      case 3:
        this.cardPlacement = motorcycleCardFour;
        this.cardPlacement.classList.remove("hide");
        break;
    }

    let motorcycleHeader = document.createElement("div");
    motorcycleHeader.setAttribute("id", "motorcycleHeader");
    motorcycleHeader.classList.add("rounded");
    let title = document.createElement("h2");
    let year = document.createElement("h3");
    let previousButton = document.createElement("button");
    previousButton.setAttribute("id", "previousButton");
    let pEl = document.createElement("p");
    let nextButton = document.createElement("button");
    nextButton.setAttribute("id", "nextButton");
    let imageContainer = document.createElement("div");
    imageContainer.setAttribute("id", "imageContainer");
    imageContainer.classList.add("rounded");
    let motorcycleImage = document.createElement("img");
    motorcycleImage.setAttribute("id", "motorcycleImage");
    let trashButton = document.createElement("button");
    trashButton.setAttribute("id", "trashButton");
    let detailsButton = document.createElement("button");
    detailsButton.setAttribute("id", "detailsButton");
    detailsButton.classList.add("rounded");
    let motorcycleDetails = document.createElement("div");
    motorcycleDetails.setAttribute("id", "motorcycleDetails");

    title.textContent = `${motorcycle.make} ${motorcycle.model}`;
    year.textContent = `${motorcycle.year}`;
    previousButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left" viewBox="0 0 16 16"><path d="M10 12.796V3.204L4.519 8zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753" /></svg>`;
    pEl.textContent = "More Editions";
    nextButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16"><path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753" /></svg>`;
    detailsButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"/></svg>`;
    trashButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"> <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/><path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/></svg>`;

    this.motorcycleTitleString = `${motorcycle.make} ${motorcycle.model} ${motorcycle.year}`;

    getMotorcycleImages(this.motorcycleTitleString).then((url) => {
      motorcycleImage.src = url;
    });

    imageContainer.appendChild(motorcycleImage);

    this.cardPlacement.appendChild(motorcycleHeader);
    motorcycleHeader.appendChild(title);
    motorcycleHeader.appendChild(year);
    motorcycleHeader.appendChild(previousButton);
    motorcycleHeader.appendChild(pEl);
    motorcycleHeader.appendChild(nextButton);
    motorcycleHeader.appendChild(imageContainer);
    motorcycleHeader.appendChild(detailsButton);
    motorcycleHeader.appendChild(trashButton);
    this.cardPlacement.appendChild(motorcycleDetails);

    if (this.cardPlacement.classList.contains("hide")) {
      this.cardPlacement.classList.remove("hide");
    }

    for (let key in motorcycle) {
      if (motorcycle.hasOwnProperty(key)) {
        let detailItem = document.createElement("li");
        detailItem.innerHTML = `<strong>${key.replace(/_/g, " ")}</strong>: ${
          motorcycle[key]
        }`;
        motorcycleDetails.appendChild(detailItem);
      }
    }

    if (this.data[this.dataIndex].length < 2) {
      previousButton.style.display = "none";
      pEl.style.display = "none";
      nextButton.style.display = "none";
    }

    nextButton.addEventListener("click", () => {
      this.editionIndex =
        (this.editionIndex + 1) % this.data[this.dataIndex].length;
      this.updateMotorcycleCard(
        title,
        year,
        previousButton,
        pEl,
        nextButton,
        detailsButton,
        motorcycleImage,
        motorcycleDetails,
        trashButton
      );
    });

    previousButton.addEventListener("click", () => {
      this.editionIndex =
        (this.editionIndex - 1 + this.data[this.dataIndex].length) %
        this.data[this.dataIndex].length;
      this.updateMotorcycleCard(
        title,
        year,
        previousButton,
        pEl,
        nextButton,
        detailsButton,
        motorcycleImage,
        motorcycleDetails,
        trashButton
      );
    });

    trashButton.addEventListener("click", () => {
      this.deleteMotorcycleCard();
    });

    detailsButton.addEventListener("click", () => {
      if (motorcycleDetails.style.display === "none") {
        motorcycleDetails.style.display = "block";
      } else {
        motorcycleDetails.style.display = "none";
      }
    });

    this.updateStorageOfDisplayedData();
  }

  updateStorageOfDisplayedData() {
    let storageArray = getLocalStorage("displayed-motorcycles") || [];
    let displayedData = this.data[this.dataIndex][this.editionIndex];

    for (let motorcycle of storageArray) {
      if (motorcycle.model === displayedData.model) {
        return;
      }
    }
    // If not found, push the new motorcycle to storageArray
    storageArray.push(displayedData);

    setLocalStorage("displayed-motorcycles", storageArray);
  }

  deleteMotorcycleCard() {
    let allMotorcycleData = getLocalStorage("motorcycles");
    let displayedMotorcycleData = getLocalStorage("displayed-motorcycles");

    allMotorcycleData.splice(this.dataIndex, 1);
    setLocalStorage("motorcycles", allMotorcycleData);

    displayedMotorcycleData.splice(this.dataIndex, 1);
    setLocalStorage("displayed-motorcycles", displayedMotorcycleData);

    this.cardPlacement.classList.add("hide");
  }

  updateMotorcycleCard(
    title,
    year,
    previousButton,
    pEl,
    nextButton,
    detailsButton,
    motorcycleImage,
    motorcycleDetails,
    trashButton
  ) {
    if (this.cardPlacement.classList.contains("hide")) {
      this.cardPlacement.classList.remove("hide");
    }

    let motorcycle = this.data[this.dataIndex][this.editionIndex];

    title.textContent = `${motorcycle.make} ${motorcycle.model}`;
    year.textContent = `${motorcycle.year}`;
    previousButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left" viewBox="0 0 16 16"><path d="M10 12.796V3.204L4.519 8zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753" /></svg>`;
    pEl.textContent = "More Editions";
    nextButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16"><path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753" /></svg>`;
    detailsButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"/></svg>`;
    trashButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"> <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/><path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/></svg>`;

    this.motorcycleTitleString = `${motorcycle.make} ${motorcycle.model} ${motorcycle.year}`;
    getMotorcycleImages(this.motorcycleTitleString).then((url) => {
      motorcycleImage.src = url;
    });

    motorcycleDetails.innerHTML = "";
    for (let key in motorcycle) {
      if (motorcycle.hasOwnProperty(key)) {
        let detailItem = document.createElement("li");
        detailItem.innerHTML = `<strong>${key.replace(/_/g, " ")}</strong>: ${
          motorcycle[key]
        }`;
        motorcycleDetails.appendChild(detailItem);
      }
    }
  }
}
