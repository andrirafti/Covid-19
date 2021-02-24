// Country Search//
async function Covid19(country) {
  removelast()

  let URL = `https://covid-api.mmediagroup.fr/v1/cases?country=${country}`
  try {
    let Covid = await axios.get(URL)
    let CovidData = Covid.data.All
    PushCovidToBrowser(CovidData)
  }
  catch {
    alert("Try Again, country has not been found")
  }
}

let PushCovidToBrowser = function (val) {
 let TheDiv= document.querySelector('.div')
  let CovidHTML = `

  <h1> 🇱🇷 Country:${val.country}</h1>
  <p> 🤕 Cases :${val.confirmed}</p>
  <p> 🪦 Deaths :${val.deaths}</p>
  <p> 🏥Recovered :${val.recovered}</p>
  <p> 👨‍👩‍👧‍👧Population :${val.population}</p>
  <p> 💻 Updated :${val.updated}</p>
  `
  TheDiv.insertAdjacentHTML('beforeend',CovidHTML)
}
//

document.querySelector('#search').addEventListener('click', function () {
   Covid19(document.querySelector('#blank').value)// its like replacing country in the URL link with whatever we search for.
  document.querySelector('#blank').value=''
})

//remove last
let removelast = function () {
  let removeme = document.querySelector('.div')
  while (removeme.lastChild) {
    removeme.removeChild(removeme.lastChild)
  }
}