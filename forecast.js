
const getCity = document.querySelector('form');
const details = document.querySelector('.details');
const card = document.querySelector('.card');
const cardImg = document.querySelector('.card img');

const updateCard = async (city) =>{
    
    const cityDetails = await getLocation(city);
    const cityCondition = await getWeather(cityDetails.Key);
    console.log(cityDetails , cityCondition);
    return {cityDetails , cityCondition};
    
}; 

const updateLayout = (data)=>{
details.innerHTML = `
    <h4 class="my-3">${data.cityDetails.EnglishName}</h4>
    <div class="my-3">${data.cityCondition.WeatherText}</div>
    <div class="display-4 my-4">
    <span>${data.cityCondition.Temperature.Metric.Value}</span>
    <span>&deg; C</span>`;

    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }

    let imgSrc = null;
    if (data.cityCondition.IsDayTime){
        imgSrc ='img/day.svg';
    }
    else {
        imgSrc = 'img/night.svg';
    }

    cardImg.setAttribute('src', imgSrc);
};
getCity.addEventListener('submit', (e) =>{
    e.preventDefault();
    const city = getCity.city.value.trim()
    getCity.reset();

    updateCard(city).then(data => updateLayout(data)).catch((err)=> console.log(err));
});