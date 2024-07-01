import { displayAllCards, displayNewCard } from "./utils/displayData";
import { getMotorcycleData } from "./utils/externalServices/motorcycleDataAPI";
import { validateSearch, getStorageCount } from "./utils/helpers";

const addButton = document.getElementById("addButton");
addButton.addEventListener("click", () => {

    if (getCardCount() === 4) {
        alert("Limit of 4 motorcycles reached");
        return;
    }

    let make = document.getElementById("input-make").value;
    let model = document.getElementById("input-model").value;
    let year = document.getElementById("input-year").value;

    validateSearch(make, model, year);

    if (!validateSearch(make, model, year)) {
        alert("Please enter all fields");
        return;
    }
    else {
        getMotorcycleData(make, model, year);
        displayNewCard();
    }
});

getStorageCount();

displayAllCards();

