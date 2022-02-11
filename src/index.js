// import './index.css'

let inputForm = document.getElementById('input-form')
inputForm.onsubmit = handleSubmit

let num = 1

const headerNumber = document.getElementById("the-number")
headerNumber.innerText = num

const gradientArray = [
    "var(--background-light)",
    "var(--background-dark)",
    "var(--text-dark)",
    "var(--text-lm-grey)",
    "var(--text-dm-grey)",
    "var(--pink-purple-grad)",
    "var(--blue-grad)",
    "var(--green-grad)",
    "var(--pink-orange-grad)",
    "var(--purple-grad)"
]
const randomIndex = Math.floor(Math.random() * gradientArray.length)

function handleSubmit(event) {
    event.preventDefault()
    num = event.target.input.value
    const headerNumber = document.getElementById("the-number")
    headerNumber.innerText = num
    handleLongth(num)
    handleVolume(num)
    handleMass(num)
    const gradient = gradientArray[randomIndex]
    const header = document.getElementById('header')
    header.style.background = gradient
    const button = document.getElementById("button")
    button.style.background = gradient
}

// function handleSubmit(e) {
//     num = e.target.value
//     const headerNumber = document.getElementById("the-number")
//     headerNumber.innerText = num
//     console.log(num)
//     handleLongth(num)
//     handleVolume(num)
//     handleMass(num)
// }

const handleLongth = (n) => {
    const m2ft = (n * 3.281).toFixed(3)
    const ft2m = (n / 3.281).toFixed(3)
    const longth = document.getElementById("longth")
    longth.innerText = n + " meters = " + m2ft + " feet | " + n + " feet = " + ft2m + " meters"
}

const handleVolume = (n) => {
    const l2gal = (n / 3.785).toFixed(3)
    const gal2l = (n * 3.785).toFixed(3)
    const volume = document.getElementById("volume")
    volume.innerText = n + " liters = " + l2gal + " gallons | " + n + " gallons = " + gal2l + " liters"
}

const handleMass = (n) => {
    const kg2lb = (n * 2.205).toFixed(3)
    const lb2kg = (n / 2.205).toFixed(3)
    const mass = document.getElementById("mass")
    mass.innerText = n + " kilos = " + kg2lb + " pounds | " + n + " pounds = " + lb2kg + " kilos"
}

handleLongth(num)
handleVolume(num)
handleMass(num)