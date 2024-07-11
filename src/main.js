import { displayAllCards } from "./utils/displayData";
import { getMotorcycleData } from "./utils/externalServices/motorcycleDataAPI";
import { validateSearch, getStorageCount, removeLocalStorage } from "./utils/helpers";

const addButton = document.getElementById("addButton");
addButton.addEventListener("click", async () => {

    // if (getStorageCount() === 4) {
    //     alert("Limit of 4 motorcycles reached");
    //     return;
    // }

    let make = document.getElementById("input-make").value;
    let model = document.getElementById("input-model").value;
    let year = document.getElementById("input-year").value;

    validateSearch(make, model, year);

    if (!validateSearch(make, model, year)) {
        alert("Please enter all fields");
        return;
    } else {
        const dataFetched = await getMotorcycleData(make, model, year);
        if (dataFetched) {
            displayAllCards();
        } else {
            console.log("Data not fetched");
        }
    }
});

removeLocalStorage("displayed-motorcycles");
removeLocalStorage("motorcycles");

getStorageCount();

displayAllCards();
