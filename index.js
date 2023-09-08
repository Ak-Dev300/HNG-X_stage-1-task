const day = document.querySelector(".day");
const time = document.querySelector(".time");

const dayTimeOftheWeek = new Date()
let d = dayTimeOftheWeek.getDay()
// let hours = dayTimeOftheWeek.getHours()
// let minutes = dayTimeOftheWeek.getMinutes()
// let seconds = dayTimeOftheWeek.getSeconds()
let milliSeconds = dayTimeOftheWeek.getTime()

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

day.textContent = days[d - 1]
time.textContent = `${milliSeconds}`

