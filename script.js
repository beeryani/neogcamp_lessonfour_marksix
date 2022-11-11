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