const handleSeconds = document.querySelector(".second-hand")
const handleMinutes = document.querySelector(".min-hand")
const handleHours = document.querySelector(".hour-hand")
function clockReal() {
  const now = new Date()

  const seconds = now.getSeconds()
  const secondDegres = (seconds / 60) * 360 + 90
  handleSeconds.style.transform = `rotate(${secondDegres}deg)`

  const minutes = now.getMinutes()
  const minutesDegres = (minutes / 60) * 360 + 90
  handleMinutes.style.transform = `rotate(${minutesDegres}deg)`

  const hours = now.getHours()
  const hoursDegres = (hours / 12) * 360 + 90
  handleHours.style.transform = `rotate(${hoursDegres}deg)`
}

setInterval(clockReal, 1000)
