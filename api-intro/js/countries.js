const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => displayCountry(data))
}

const displayCountry = (countries) => {
    //console.log(data);
    const divs = document.getElementById('countries');
    countries.forEach(country => {
        //console.log(country);
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
        <h3>${country.name}</h3>
        <p>Capital: ${country.capital} | Time Zone: ${country.timezones}</p>
        <button onclick="loadCountryByName('${country.name}')">Details</button>`;
        divs.appendChild(div);
    });
}

const loadCountryByName = name => {
    const url = `https://restcountries.com/v2/name/${name}`;
    // fetch('https://restcountries.com/v2/name/');
    fetch(url)
        .then(res => res.json())
        .then(data => showCountryData(data[0]));
}

const showCountryData = data => {
    // data.forEach(data => {
    //     console.log(data.name);
    // });

    const countryDiv = document.getElementById('country-detail');
    countryDiv.innerHTML = `
    <h4>${data.name}</h4>
    <p>${data.population}</p>
    <img width=200px src="${data.flag}">`;
} 