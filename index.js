const themeSwitcher = document.querySelector('#themeSwitcher')
const lightToggle = document.querySelector('#lightToggle')
const darkToggle = document.querySelector('#darkToggle')
let dark = false

themeSwitcher.onclick = () => {
  if (dark) {
    document.querySelector('html').setAttribute('data-theme', 'light')
    lightToggle.style.display = 'none'
    darkToggle.style.display = 'block'
  } else {
    document.querySelector('html').setAttribute('data-theme', 'dark')
    lightToggle.style.display = 'block'
    darkToggle.style.display = 'none'
  }

  dark = !dark
}