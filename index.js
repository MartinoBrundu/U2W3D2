const key = "invio-memory"


const fButton = document.getElementById('firstButton')
const sButton = document.getElementById('secButton')
const textArea = document.getElementById('area')

const form = document.getElementsByTagName ('form')

fButton.addEventListener('click', function(){
    localStorage.setItem(key, textArea.value)
    document.getElementsByClassName('alert')[0].classList.remove('d-none')
textArea.value=''
// rendo visibile il div con d-none per 2 secondi ù
setTimeout(() => {
    document.getElementsByClassName('alert')[0].classList.add('d-none')
}, 2000);
})

secButton.addEventListener('click', function(){
    localStorage.removeItem(key)
})

