// Your code goes here
const intro = document.querySelector('.intro');
intro.addEventListener('mouseover', function (event){
    intro.style.backgroundColor = 'purple'
})

const h2 = document.querySelector('.text-content');
h2.addEventListener('dblclick', function (event){
    h2.style.backgroundColor = 'green'
})

const adventureAwaits = document.querySelector('.text-content:nth-of-type(2)')
adventureAwaits.addEventListener('dblclick', function (event){
    adventureAwaits.style.backgroundColor = 'blue'
    adventureAwaits.style.color = 'yellow'
})

const pickDestination = document.querySelector('.content-destination')
pickDestination.addEventListener('dblclick', function (event){
    pickDestination.style.color = 'red'
    pickDestination.style.backgroundColor = 'blue'
})

const funSun = document.querySelector('.destination')
funSun.addEventListener('click', function (event){
    funSun.style.backgroundColor = 'teal'
    funSun.style.color = 'red'
})


