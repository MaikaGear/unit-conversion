const userDisplay = document.querySelectorAll('.user-input-display');
const feetDisplay = document.getElementById('feet-display');
const metersDisplay = document.getElementById('meters-display');
const gallonsDisplay = document.getElementById('gallons-display');
const litersDisplay = document.getElementById('liters-display');
const poundsDisplay = document.getElementById('pounds-display');
const kilosDisplay = document.getElementById('kilos-display');
const userInput = document.getElementById('user-input');
const btn = document.querySelector('.convert-btn');
const topBoxParent = document.querySelector('.error-div');
const resetBtn = document.getElementById('reset-btn');
const darkBtn = document.querySelector('.dark-mode');
const vbtn = document.querySelector('.V-box');
const lbtn = document.querySelector('.L-box');
const mbtn = document.querySelector('.M-box');
const btmBox = document.querySelector('.btm-box');
const section = document.querySelector('.section');
const lightBtn = document.querySelector('.light-mode');
const bodySec = document.getElementById('body-sec');
//Model
function setDisplay(display, value){
    display.innerText = value
}


function change(btn, color, bgcolor){
    btn.style.backgroundColor =  bgcolor;
    btn.style.color = color;
}

//View
darkBtn.addEventListener('click', () => {
    change(vbtn, 'white', '#273549')
    change(lbtn, 'white', '#273549')
    change(mbtn, 'white', '#273549')
    btmBox.style.backgroundColor = "#1F2937"
    section.style.backgroundColor = "#1F2937"
    bodySec.style.backgroundImage = "-webkit-linear-gradient(rgba(24, 23, 66, 0.918), rgb(0, 0, 0)"
    change(darkBtn, 'white', '#2f415a60')
    change(lightBtn, 'white', '#2f415a')
    lightBtn.removeAttribute('disabled')
    darkBtn.disabled = true

})

lightBtn.addEventListener('click', () => {
    change(vbtn, '#353535', '#FFFFFF')
    change(lbtn, '#353535', '#FFFFFF')
    change(mbtn, '#353535', '#FFFFFF')
    btmBox.style.backgroundColor = "#F4F4F4"
    section.style.backgroundColor = "#F4F4F4"
    bodySec.style.backgroundImage = '-webkit-linear-gradient(rgba(83, 80, 255, 0.349), rgb(255, 255, 255)'
    change(darkBtn, 'white', '#a7a7a7')
    change(lightBtn, 'white', '#7070703b')
    darkBtn.removeAttribute('disabled')
    lightBtn.disabled = true
})

//Controller 
function converter(num){
    if(userInput.value === ''){
        let newEl = document.createElement('p')
        newEl.setAttribute('class', 'error-msg')
        newEl.innerHTML = "Please enter a number to convert."
        topBoxParent.appendChild(newEl)
        userInput.value = ''
        userInput.addEventListener('click', () => {
            newEl.textContent = ''
            btn.removeAttribute('disabled')
        })
        if(topBoxParent.hasChildNodes() === true){
            btn.setAttribute('disabled', true)
            resetBtn.setAttribute('disabled', true)
        }
    } else {
        userDisplay.forEach(display => {
            display.innerText = num
        })
        let totalLengthMet = num / 0.3048
        let totalLengthImp = num * 0.3048
        feetDisplay.innerText = totalLengthMet.toFixed(3)
        metersDisplay.innerText = totalLengthImp.toFixed(3)
        let totalVolumeMet = num * 0.26417
        let totalVolumeImp = num / 0.26417
        gallonsDisplay.innerText = totalVolumeMet.toFixed(3)
        litersDisplay.innerText = totalVolumeImp.toFixed(3)
        let totalMassMet = num * 2.2046
        let totalMassImp = num * 0.45359
        poundsDisplay.innerText = totalMassMet.toFixed(3)
        kilosDisplay.innerText = totalMassImp.toFixed(3)
        userInput.value = ''
    }

}

btn.addEventListener("click", () => {
    
    let input = Number(userInput.value)
    resetBtn.removeAttribute('disabled')
    if(isNaN(input) === false){
        converter(input)
    } else {
        let newEl = document.createElement('p')
        newEl.setAttribute('class', 'error-msg')
        newEl.textContent = "Oops! Please enter a valid number and try again."
        topBoxParent.appendChild(newEl)
        userInput.value = ''

        if(newEl.textContent === 'Oops! Please enter a valid number and try again.'){
            btn.setAttribute('disabled', true)
            resetBtn.setAttribute('disabled', true)
            userInput.addEventListener('click', () => {
                if(topBoxParent.hasChildNodes(newEl) === true){
                    topBoxParent.removeChild(topBoxParent.lastChild)
                    btn.removeAttribute('disabled')
                } 
            })
        }
    }
})


resetBtn.addEventListener("click", () => {
    userDisplay.forEach(display => {
        display.innerText = 0
    })
    setDisplay(feetDisplay, '0.000')
    setDisplay(metersDisplay, '0.000')
    setDisplay(gallonsDisplay, '0.000')
    setDisplay(litersDisplay, '0.000')
    setDisplay(poundsDisplay, '0.000')
    setDisplay(kilosDisplay, '0.000')
    resetBtn.setAttribute("disabled", true);
})
