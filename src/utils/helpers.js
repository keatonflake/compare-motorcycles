export function setLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
    // console.log(JSON.parse(localStorage.getItem(key)));
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

    if (getLocalStorage("motorcycles").length == null) {
        return 0;
    }
    else if (getLocalStorage("motorcycles").length < 1){
        return 0;
    }
    else if (getLocalStorage("motorcycles").length > 4) {
        alert("Limit of 4 motorcycles reached");
    }
    else {
        return getLocalStorage("motorcycles").length;
    }
}