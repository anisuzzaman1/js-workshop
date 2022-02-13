loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}

displayCountries = (countries) => {
    //console.log(countries[0]);
    const container = document.getElementById('countries');
    const countryHTML = countries.map(countries => getCountriesHTML(countries));
    container.innerHTML = countryHTML.join(' ');
    console.log(countryHTML);
}

const getCountriesHTML = country => {
    return `
    <div class="country">
        <h2>${country.name}</h2>
        <h4>Capital: ${country.capital}</h4>
        <img src='${country.flag}'>
    </div>
    `;
}