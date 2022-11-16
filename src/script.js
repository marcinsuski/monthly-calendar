// Variables
const monthName = document.querySelector('.date h1')
const fullDate = document.querySelector('.date p')
const dayGrid = document.querySelector('.days')

const monthIndex = new Date().getMonth()
const lastDay = new Date(new Date().getFullYear(), monthIndex + 1, 0).getDate()
const firstDay = new Date(new Date().getFullYear(), monthIndex, 1).getDay() - 1

// array for Title
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

monthName.innerText = months[monthIndex]
fullDate.innerText = new Date().toDateString()

let days = ''

// add empty divs at the beginning of the month, going backwards from the 1st day of month as a weekday.
for (let i = firstDay; i > 0; i--) {
  days += `<div class="empty"></div>`
}

// add a grid with days
for (let i = 1; i <= lastDay; i++) {
  if (i === new Date().getDate()) {
    days += `<div class='today'>${i}</div>`
  } else {
    days += `<div>${i}</div>`
  }
}

dayGrid.innerHTML = days
