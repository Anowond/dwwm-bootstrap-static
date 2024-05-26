let navbar = document.getElementById('navbar')
let icon = document.getElementById('icon')
let links = document.querySelectorAll('nav li')

icon.addEventListener('click', () => {
    navbar.classList.toggle('active')
})

links.forEach( (link) => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active')
    })
})
