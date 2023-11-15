// load URL query string to fetch API for result page
function loadCountry(){
    const url = new URLSearchParams(window.location.search); 
    const countryCode = url.get('code');
    var api = 'https://restcountries.com/v2/alpha?codes=' + countryCode;
    fetch(api)
    .then(res => res.json())
    .then((dataJSON) =>{
        loadResult(dataJSON); 
    }); 
}

// display country details in result page
function loadResult(dataJSON){
    const capitalText = document.getElementById("capital"); 
    const populationText = document.getElementById("population"); 
    const countryFlag = document.getElementById("country-flag"); 
    for(var country of dataJSON){
        const countryName = country.name; 
        const countryImg = country.flags.png; 
        const capital = country.capital; 
        const population = country.population; 
        capitalText.innerHTML += capital; 
        populationText.innerHTML += population; 
        countryFlag.src=countryImg; 
    }
}
// button redirect main page
function goToIndex() {
    location.assign("../index.html");
  }