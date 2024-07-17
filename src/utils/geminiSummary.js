import { getLocalStorage } from "./helpers.js";
import { dataSummary } from "./externalServices/geminiAPI.js";

const geminiButton = document.getElementById("geminiContainer");
const summaryParagraph = document.getElementById("summaryParagraph");
const closeButton = document.querySelector(".closeButton");

// when gemini button is clicked the container grows vertically
// and the summary appears

geminiButton.addEventListener("click", () => {
  if (geminiButton.classList.contains("expanded")) {
    geminiButton.classList.remove("expanded");
    summaryParagraph.classList.add("hide");
    closeButton.classList.add("hide");
    geminiButton.classList.add("geminiContainer");
  } else {
    geminiButton.classList.add("expanded");
    geminiButton.classList.remove("geminiContainer");
    summaryParagraph.classList.remove("hide");
    closeButton.classList.remove("hide");

    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth", // Use smooth scrolling
      });
    }, 500);

    displaySummary();
  }
});

async function displaySummary() {
  let data = getLocalStorage(`displayed-motorcycles`);
  let summary = "";

  if (!data || data.length === 0) {
    summary =
      "Add a motorcycle to see a summary of its specs. Add multiple motorcycles to compare them.";
  } else {
    let motorcycle1 = JSON.stringify(data[0] || "");
    let motorcycle2 = JSON.stringify(data[1] || "");
    let motorcycle3 = JSON.stringify(data[2] || "");
    let motorcycle4 = JSON.stringify(data[3] || "");

    let prompt = `Here are the names and specs for 1 or more motorcycles. If there is informformation for more than one motorcycle,
      please give a comparison between them and why an individual might choose one over the other.
      If data for only one motorcycle is provided, please give a summary of that motorcycle
      and why an individual would choose it:
      ${motorcycle1}
      ${motorcycle2}
      ${motorcycle3}
      ${motorcycle4}
      
      Keep the summary under 175 words. Always start with the name or names of the motorcycles.`;

    summary = await dataSummary(prompt);
  }

  summaryParagraph.textContent = summary;
}
