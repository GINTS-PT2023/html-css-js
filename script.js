
const clickMeButton = document.getElementById("clickMeButton")
const countBox = document.getElementById("countBox")
const Header = document.getElementById("header")
const Paragraph = document.querySelector("p")

let count = 0

function clickMeCounter(){
    count++;
    countBox.innerHTML = "Count: " + count
}

clickMeButton.addEventListener("click", clickMeCounter)

Header.addEventListener("click", () => console.log("gints"))

Paragraph.addEventListener("click", function(){
    Paragraph.remove();
})

