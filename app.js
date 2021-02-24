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


//STATE SEARCH//
async function Covid(statename) {
  
  removelast();
  let URL = `https://covid-api.mmediagroup.fr/v1//cases?country=US`
  try {
    let data2 = await axios.get(URL)
    let updateddata = data2.data[`${statename}`] // this works because its an array of objects so to call the states name use [] since its before the actual object input
    //console.log(data2.data)                       // So if we type in All for the above it will give All data for above country aka US
    PushToBrowser1(updateddata)
    
  }
  catch {
    alert("No State Found")
  }
  
}






let PushToBrowser1 = function (val2) {
  let TheDiv1= document.querySelector('.div')
  let CovidHTML1 = `
   <h1>  USA: State Results </h1>
   <p> 🤕 Cases :${val2.confirmed}</p>
   <p> 🪦 Deaths :${val2.deaths}</p>
   <p> 💻 Updated :${val2.updated}</p>
   `
   TheDiv1.insertAdjacentHTML('beforeend',CovidHTML1)
}
 //
 document.querySelector('.Search1').addEventListener('click', function () {
  Covid(document.querySelector('#blank1').value)// its like replacing country in the URL link with whatever we search for.
 document.querySelector('#blank1').value=''
})







//remove last//
let removelast = function () {
  let removeme = document.querySelector('.div')
  while (removeme.lastChild) {
    removeme.removeChild(removeme.lastChild)
  }
}


///


document.querySelector('.Link').addEventListener("click", function () {
  window.open("https://www.youtube.com/watch?v=i0ZabxXmH4Y")
})


document.querySelector('.Message').addEventListener("click", function () {
  document.querySelector('.Wow').value = ''
  document.querySelector('.Wow1').value = ''
  document.querySelector('.Wow2').value=''
  alert("Message sent!")

  
}
)