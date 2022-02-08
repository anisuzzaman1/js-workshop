const loadQoutes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQoutes(data))
}

const displayQoutes = (data) => {
    //console.log(data);
    const qouteElement = document.getElementById('qoute');
    qouteElement.classList.add('blockquote')
    qouteElement.innerText = data.quote;
}