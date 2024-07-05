import { MotorcycleCard } from "./MotorcycleCard.js";
import { getLocalStorage, setLocalStorage} from "./helpers.js";

export function displayAllCards() {
  let data = getLocalStorage("motorcycles");

  if (data == null) {
    console.log("Local storage is empty");
    setLocalStorage("displayed-motorcycles", []);
    return;
  }

  for (let i = 0; i < data.length; i++) {
    // console.log(data[i]);
    let motorcycleCard = new MotorcycleCard(data, i);
    motorcycleCard.createMotorcycleCard();
  }
}

export function displayNewCard(){
  let data = getLocalStorage("motorcycles");
  let motorcycleCard = new MotorcycleCard(data, i);
  motorcycleCard.createMotorcycleCard();
}