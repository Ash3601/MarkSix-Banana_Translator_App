const translateBtn = document.querySelector("#translate-btn");
const inputTxt = document.querySelector("#input__txt");
const outputTxt = document.querySelector("#output__txt");

const url = "https://api.funtranslations.com/translate/minion.json";

function translate(text) {
  return url + "?" + "text=" + text;
}

function clickHandler() {
  let input_txt = inputTxt.value;
  fetch(translate(input_txt))
    .then((response) => response.json())
    .then((json) => {
      let translatedTxt = json.contents.translated;
      outputTxt.innerText = translatedTxt;
    })
    .catch((err) => {
      console.log("Error occured");
      outputTxt.innerText = "An error occured in the API :( Please try later";
    });
}

translateBtn.addEventListener("click", clickHandler);
