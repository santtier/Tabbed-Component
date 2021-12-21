import Tabby from './tabby.js'

// Resolve browser inconsistences when clicking on buttons
document.addEventListener('click', event => {
  if (event.target.matches('button')) {
    event.target.focus()
  }
})

// ========================
// Execution
// ========================
const tabbies = [...document.querySelectorAll('.tabby')]
tabbies.forEach(tabby => {
  /* eslint-disable */
  new Tabby(tabby)
  /* eslint-enable */
})
