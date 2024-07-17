export function setLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function getLocalStorage(key) {
    if (localStorage.getItem(key) === "" || localStorage.getItem(key) === []) {
        return [];
    }
    else {
        return JSON.parse(localStorage.getItem(key));
    }
}

export function emptyLocalStorage(key) {
    localStorage.setItem(key, JSON.stringify([]));
}

export function removeLocalStorage(key) {
    localStorage.removeItem(key);
}

export function validateSearch(make, model, year) {

    if (make === "" || model === "" || year === "") {
        return false;
    }
    else {
        return true;
    }
}

export function getStorageCount() {

    // if local storage does not exist, return 0
    if (getLocalStorage("motorcycles") == null) {
        return;
    }

    if (getLocalStorage("motorcycles").length == null) {
        return;
    }
    else if (getLocalStorage("motorcycles").length < 1){
        return 0;
    }
    // else if (getLocalStorage("motorcycles").length > 4) {
    //     alert("Limit of 4 motorcycles reached");
    // }
    else {
        return getLocalStorage("motorcycles").length;
    }
}

export function hideAllCards() {
    console.log("Hiding all cards");
    let allCards = document.querySelectorAll(".card");
    allCards.forEach((card) => {
        card.classList.add("hide");
    });
}