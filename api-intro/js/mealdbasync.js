const searchFood = () => {
    const searchField = document.getElementById('foodName');
    const searchText = searchField.value;

    // Clear Data
    searchField.value = '';

    // Load Data
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.meals));
}

const displaySearchResult = meals => {
    //console.log(meals);
    const searchResult = document.getElementById('search-result');

    // Clear Prv Data
    searchResult.innerHTML = '';

    // if (meal.length == 0) {
    //     console.log('No Result');
    // }
    meals.forEach(meal => {
        // console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadMealDetaiil(${meal.idMeal})" class="card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 250)}</p>
                </div>
            </div>
        `;
        searchResult.appendChild(div);
    });
}

const loadMealDetaiil = async mealId => {
    // console.log(mealId);
    // https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

    const res = await fetch(url);
    const data = await res.json();
    displayMealDetails(data.meals[0]);

    // console.log(url);
    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => displayMealDetails(data.meals[0]));
}

const displayMealDetails = meal => {
    // console.log(meal);

    const mealDetails = document.getElementById('meal-details');

    // Clear Contain
    mealDetails.textContent = '';

    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions}</p>
                <a href="${meal.strYoutube}" class="btn btn-primary">Youtube</a>
            </div>
    `;
    mealDetails.appendChild(div);
}