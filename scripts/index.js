// API call to select drop down
function loadCountries(){
    fetch("./data/countries.json")
    .then(res => res.json())
    .then((dataJSON) =>{
        console.log(dataJSON); 
        loadSelect(dataJSON); 
    }); 
}

// load json to select drop down
function loadSelect(dataJSON){
    const selection = document.getElementById("selectBox"); 
    const showCountry = document.getElementById("showCountry"); 
    selection.innerHTML += `<option value="0">Select country</option>`;
    const countryList = dataJSON.Countries; 

    for (var i = 0; i < countryList.length; i++) {
        const countryName  = countryList[i].name;
        const countryCode = countryList[i].code;
        const countryCapital = countryList[i].capital;
        selection.innerHTML += `<option data-name="${countryName}" value="${countryCode}">
        ${countryName}</option>`;
        showCountry.innerHTML += `<p id="showText">${countryName} - ${countryCapital} - ${countryCode}</p>`;
    }
}

// save select options to localStorage and redirect to result page
function showCountryInfo(countryCode){
    const selection = document.getElementById("selectBox").selectedIndex; 
    const option  = document.getElementById("selectBox").options; 
    const name = option[selection].text
    localStorage.setItem("cname", name);  
    localStorage.setItem("ccode", countryCode); 
    if(this.selectedIndex !==0){
        location.assign(`./pages/report.html?code=${countryCode}`); 
    }
}
