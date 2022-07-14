let [input1, input2] = document.querySelectorAll('input')
let btn = document.querySelector("button")

function handleChange() {

  if (input1.value && input2.value.length >= 8) {
    btn.style.background = '#FF002E'
    btn.disabled = ""
  } else {
    btn.style.background = '#rgba(255, 0, 46, 0.21)'
    btn.disabled = "disebled"
  }
}
input1.addEventListener('input', handleChange)
input2.addEventListener('input', handleChange)
function clicar() {
  window.location.href = "https://www.leagueoflegends.com/pt-br/"
}
