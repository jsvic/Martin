const nav = document.querySelector('.nav')
//const logo = document.querySelector('.logo')

document.addEventListener('scroll', () => {
    let posicao = window.scrollY 

    if(posicao >= 510) {
        nav.classList.add('nav_ativado')
        //logo.classList.add('footer_ativado')
    }
})

const lk_about = document.querySelector('#lk_about')

lk_about.addEventListener('click', () => {
    window.scroll({
        top: 880,
        behavior: "smooth"
    })
})
