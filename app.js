let $ = document
let triesCount = 0
let btn = $.querySelector("button")
let question1 = $.querySelector("#question1")
let question2 = $.querySelector("#question2")
let question3 = $.querySelector("#question3")
btn.addEventListener("click", () => {
    if (question1.value === "Valentina Tereshkova" && question2.value === "Stephen Hawking" && question3.value === "Neil Armstrong") {
        alert("برنده شدی :) خیلی خوشگلی ")
    } else if (triesCount === 3) {
        alert("باختی ! میخواستم بگم خیلی خوشگلی ")
    }
    else {
        triesCount++
    }
    question1.value = ""
    question2.value = ""
    question3.value = ""
})