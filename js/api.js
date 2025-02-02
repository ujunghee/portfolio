
// async function fetchMeather(cityName, index, timeAdjust) { // async 함수
//    let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=239c004f73eeec19c5b2ac6718757e13`)
//   response = await result.json()

//   let timeValue = new Date()
//   let hours = ('0' + (timeValue.getHours() + timeAdjust)).slice(-2)
//   let minutes = ('0' + timeValue.getMinutes()).slice(-2)
  
//   let time = `${hours}:${minutes}`
//   document.querySelector('.right .tiem').innerHTML = time
// }

const cityName = 'seoul'
const timeAdjust = 0

async function fetchMeather(cityName, timeAdjust) {
  let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=239c004f73eeec19c5b2ac6718757e13`)
  response = await result.json()

    let timeValue = new Date()
    let hours = ('0' + (timeValue.getHours() + timeAdjust)).slice(-2)
    let minutes = ('0' + timeValue.getMinutes()).slice(-2)
    
      let time = `${hours}:${minutes}`
      document.querySelector('.right .time').innerHTML = time
}
fetchMeather(cityName, timeAdjust)