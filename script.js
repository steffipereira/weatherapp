const key = 'J3mwrLhH28C9azevuhAF09uxGVEEyCPW';

const getLocation = async (city) =>{

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query =`?apikey=${key}&q=${city}`;
    const response = await fetch(base+query);
    const data = await response.json();
    return data[0];
};

const getWeather = async (Key) =>{
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${Key}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];

};


// getLocation('mumbai')
//     .then((data) => {
//         return getWeather(data.Key)
//     })
//     .then((data)=> console.log(data))
//     .catch(err => console.log(err));