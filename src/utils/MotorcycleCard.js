import { getMotorcycleImages } from "./externalServices/googleImageAPI";
import { getStorageCount } from "./helpers";

export class MotorcycleCard {
  constructor(data, dataIndex) {
    this.data = data;
    this.dataIndex = dataIndex;
    this.editionIndex = 0;
    this.cardStorageCount = getStorageCount();
    // this.cardCount = this.cardCount;
    this.motorcycleTitleString = "";
  }

  createMotorcycleCard() {
    let motorcycle = this.data[this.dataIndex][this.editionIndex];
    let cardPlacement;
    let motorcycleCardOne = document.getElementById("motorcycleCardOne");
    let motorcycleCardTwo = document.getElementById("motorcycleCardTwo");
    let motorcycleCardThree = document.getElementById("motorcycleCardThree");
    let motorcycleCardFour = document.getElementById("motorcycleCardFour");

    switch (this.dataIndex) {
      case 0:
        cardPlacement = motorcycleCardOne;
        break;
      case 1:
        cardPlacement = motorcycleCardTwo;
        break;
      case 2:
        cardPlacement = motorcycleCardThree;
        break;
      case 3:
        cardPlacement = motorcycleCardFour;
        break;
    }
    console.log(`Card placement: ` + cardPlacement);

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

    this.motorcycleTitleString = `${motorcycle.make} ${motorcycle.model} ${motorcycle.year}`;

    // getMotorcycleImages(this.motorcycleTitleString).then((url) => {
    //   motorcycleImage.src = url;
    // });

    imageContainer.appendChild(motorcycleImage);

    cardPlacement.appendChild(motorcycleHeader);
    motorcycleHeader.appendChild(title);
    motorcycleHeader.appendChild(year);
    motorcycleHeader.appendChild(previousButton);
    motorcycleHeader.appendChild(pEl);
    motorcycleHeader.appendChild(nextButton);
    motorcycleHeader.appendChild(imageContainer);
    motorcycleHeader.appendChild(detailsButton);
    cardPlacement.appendChild(motorcycleDetails);

    for (let key in motorcycle) {
      if (motorcycle.hasOwnProperty(key)) {
        let detailItem = document.createElement("li");
        detailItem.innerHTML = `<strong>${key.replace(/_/g, " ")}</strong>: ${motorcycle[key]}`;
        motorcycleDetails.appendChild(detailItem);
      }
    }

    if (this.data[this.dataIndex].length < 2) {
      previousButton.style.display = "none";
      pEl.style.display = "none";
      nextButton.style.display = "none";
    }

    nextButton.addEventListener("click", () => {
      this.editionIndex = (this.editionIndex + 1) % this.data[this.dataIndex].length;
      this.updateMotorcycleCard(title, year, previousButton, pEl, nextButton, detailsButton, motorcycleImage, motorcycleDetails);
    });

    previousButton.addEventListener("click", () => {
      this.editionIndex = (this.editionIndex - 1 + this.data[this.dataIndex].length) % this.data[this.dataIndex].length;
      this.updateMotorcycleCard(title, year, previousButton, pEl, nextButton, detailsButton, motorcycleImage, motorcycleDetails);
    });

    detailsButton.addEventListener("click", () => {
      if (motorcycleDetails.style.display === "none") {
        motorcycleDetails.style.display = "block";
      } else {
        motorcycleDetails.style.display = "none";
      }
    });
  }

  updateMotorcycleCard(title, year, previousButton, pEl, nextButton, detailsButton, motorcycleImage, motorcycleDetails) {
    let motorcycle = this.data[this.dataIndex][this.editionIndex];

    title.textContent = `${motorcycle.make} ${motorcycle.model}`;
    year.textContent = `${motorcycle.year}`;
    previousButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left" viewBox="0 0 16 16"><path d="M10 12.796V3.204L4.519 8zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753" /></svg>`;
    pEl.textContent = "More Editions";
    nextButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16"><path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753" /></svg>`;
    detailsButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"/></svg>`;

    this.motorcycleTitleString = `${motorcycle.make} ${motorcycle.model} ${motorcycle.year}`;
    // getMotorcycleImages(this.motorcycleTitleString).then((url) => {
    //   motorcycleImage.src = url;
    // });

    motorcycleDetails.innerHTML = '';
    for (let key in motorcycle) {
      if (motorcycle.hasOwnProperty(key)) {
        let detailItem = document.createElement("li");
        detailItem.innerHTML = `<strong>${key.replace(/_/g, " ")}</strong>: ${motorcycle[key]}`;
        motorcycleDetails.appendChild(detailItem);
      }
    }
  }
}
