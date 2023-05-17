const form = document.querySelector('form')

const replaceImages = () => {
  document.body.style.background = 'black'
}
form.addEventListener('submit', event => {
  event.preventDefault()

  alert('Está funcionando!')
})
