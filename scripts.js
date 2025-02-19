let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.querySelector('.container')
let items = document.querySelectorAll('.list .item')
let indicator = document.querySelector('.indicators')
let dots = indicator.querySelectorAll('ul li')
let list = container.querySelector('.list')

let active = 0
let firstPosition = 0
let lastPosition = items.length - 1

function setSlider() {
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')
   
    let dotsOld = indicator.querySelector('ul li.active')//mexendo nos tracinhos embaixo do numero
    dotsOld.classList.remove('active')//remove a classe active do tracinho anterior
    dots[active].classList.add('active')//adiciona a classe active no tracinho atual

    indicator.querySelector('.number').innerHTML = '0' + (active + 1)//função innerhtml e innertext muda o numero de 01 para 02 e assim por diante.
}

nextButton.onclick = () => {
    list.style.setProperty('--calculation', 1)
    active = active + 1 > lastPosition ? 0 : active + 1//if else resumido
    setSlider()
    items[active].classList.add('active')
}

prevButton.onclick = () => {
    list.style.setProperty('--calculation', -1)
    active = active - 1 < firstPosition ? lastPosition : active - 1//if else resumido
    setSlider()
    items[active].classList.add('active')
}
