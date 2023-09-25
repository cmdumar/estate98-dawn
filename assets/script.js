const mainImg = document.getElementById('MainImg')
const smallImgs = document.getElementsByClassName('sec-img')

smallImgs[0].onclick = function() {
    mainImg.src = smallImgs[0].src
}

smallImgs[1].onclick = function() {
    mainImg.src = smallImgs[1].src
}

smallImgs[2].onclick = function() {
    mainImg.src = smallImgs[2].src
}

smallImgs[3].onclick = function() {
    mainImg.src = smallImgs[3].src
}

// tab

const delivery = document.querySelector('.delivery')
const oneTime = document.querySelector('.onetime')

oneTime.onclick = function() {
    delivery.style.backgroundColor = 'white'
    delivery.style.color = 'black'
    oneTime.style.backgroundColor = 'black'
    oneTime.style.color = 'white'
}

delivery.onclick = function() {
    oneTime.style.backgroundColor = 'white'
    oneTime.style.color = 'black'
    delivery.style.backgroundColor = 'black'
    delivery.style.color = 'white'
}

// quantity 
const qty = document.querySelector('.qty')
const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')

let value = 1

plus.onclick = function() {
    if(value < 10) {
        value++
        qty.innerText = value
    }
}

minus.onclick = function() {
    if(value > 1) {
        value--
        qty.innerText = value
    }
}