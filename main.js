function refreshPage() {
    location.reload()
}
let signPop = document.querySelector('.client-log-popup') 
let signIn = document.querySelector('.sign-in-container')
let signInDiv = document.querySelector('.sign-in-div')
signInDiv.style.display = 'none'
signPop.style.display = 'none'
signIn.addEventListener('click', () => { 
    signPop.style.display = 'block'
    signInDiv.style.display = 'block'
    signPop.addEventListener('click', () => {
        signPop.style.display = 'none'
        signInDiv.style.display = 'none'
    })
})
// sign in closer
const signCloser = document.querySelector('.sign-in-close')
signCloser.addEventListener('click', () => {
    signInDiv.style.display = 'none'
    signPop.style.display = 'none'
})
