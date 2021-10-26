const btnTranslate = document.querySelector("#btn-input")
const inputText = document.querySelector("#txt-input")
const outputDiv = document.querySelector("#txt-output")

const serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslatedURL(text) {
    return serverURL + "?" + "text=" + text
}

function errorHandler() {
    alert("Something went wrong! Please try again after some time")
}

function clickHandler() {
    var textInput = inputText.value

    fetch(getTranslatedURL(textInput))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler)