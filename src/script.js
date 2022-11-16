const monthIndex = new Date().getMonth()
const monthName = document.querySelector('.date h1')
const monthDetails = document.querySelector('.date p')

console.log(monthIndex)

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
// monthDetails.innerText = months[monthIndex]
