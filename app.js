var txtArea = document.querySelector("#txt-area");
var btnTranslate = document.querySelector("#btn-translate");
var outputBox = document.querySelector("#output");

var serverUrl = "https://api.funtranslations.com/translate/dothraki.json";

function constructURL(input){
    return serverUrl+"?"+"text="+input;
}

function errorHandler(error){
    console.log("error occured", error);
    alert("Something went wrong with the server, please try again!")
}

function clickHandler(){
    var inputText = txtArea.value;

    fetch(constructURL(inputText))
    .then(response => response.json())
    .then(json => outputBox.innerHTML = json.contents.translated)
    .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler)