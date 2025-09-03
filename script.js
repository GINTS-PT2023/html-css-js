
const clickMeButton = document.getElementById("clickMeButton")
const countBox = document.getElementById("countBox")

let count = 0

function clickMeCounter(){
    count++;
    countBox.innerHTML = "Count: " + count
}

clickMeButton.addEventListener("click", clickMeCounter)