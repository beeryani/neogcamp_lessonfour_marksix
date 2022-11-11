function alertButton(){
    alert('This is an alert box')
}

function promptButton(){
    prompt("What's your favorite cocktail drink?")
}

document.querySelector(".consoleButton").addEventListener('click', function clickFunction(){
    console.log("clicked!")
})

function fillValue(){
    var textBoxValue = document.getElementById("input").value;
    document.getElementById("output").innerHTML = textBoxValue;
}

fetch('https://24fda9bc-07a5-42ae-81bd-bf253724a318.mock.pstmn.io/beeryani')
    .then((response) => response.json())
    .then((data) => console.log(data));