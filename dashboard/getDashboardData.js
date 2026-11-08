/* const getDashboardData = async (query) => {
    const [resDestinations, resWeathers, resAirports] = await Promise.all([
        fetch(`http://localhost:3333/destinations?search=${query}`),
        fetch(`http://localhost:3333/weathers?search=${query}`),
        fetch(`http://localhost:3333/airports?search=${query}`),
    ]);

    const destinations = await resDestinations.json();
    const weathers = await resWeathers.json();
    const airports = await resAirports.json();

    return {
        city: destinations[0].name,
        country: destinations[0].country,
        temperature: weathers[0].temperature,
        weather: weathers[0].weather_description,
        airport: airports[0].name
    };
};

getDashboardData('london')
    .then(data => {
        console.log('Dashboard data:', data);
        console.log(
            `${data.city} is in ${data.country}.\n` +
            `Today there are ${data.temperature} degrees and the weather is ${data.weather}.\n`+
            `The main airport is ${data.airport}.\n`
        );
    })
    .catch(error => console.error(error)); */

// BONUS 1

/* const getDashboardData = async (query) => {
    const [resDestinations, resWeathers, resAirports] = await Promise.all([
        fetch(`http://localhost:3333/destinations?search=${query}`),
        fetch(`http://localhost:3333/weathers?search=${query}`),
        fetch(`http://localhost:3333/airports?search=${query}`),
    ]);

    const destinations = await resDestinations.json();
    const weathers = await resWeathers.json();
    const airports = await resAirports.json();

    return {
        city: destinations.length > 0 ? destinations[0].name : null,
        country: destinations.length > 0 ? destinations[0].country : null,
        temperature: weathers.length > 0 ? weathers[0].temperature : null,
        weather: weathers.length > 0 ? weathers[0].weather_description : null,
        airport: airports.length > 0 ? airports[0].name : null
    };
};

getDashboardData('vienna')
    .then(data => {
        console.log('Dashboard data:', data);

        let messaggio = '';

        if (data.city !== null) {
            messaggio += `${data.city} is in ${data.country}.\n`;
        }
        if (data.temperature !== null) {
            messaggio += `Today there are ${data.temperature} degrees and the weather is ${data.weather}.\n`;
        }
        if (data.airport !== null) {
            messaggio += `The main airport is ${data.airport}.\n`;
        }

        console.log(messaggio);
    })
    .catch(error => console.error(error)); */

// BONUS 2

const getDashboardData = async (query) => {
    const risultati = await Promise.allSettled([
        fetch(`http://localhost:3333/destinations?search=${query}`),
        fetch(`http://localhost:3333/weathers?search=${query}`),
        fetch(`http://localhost:3333/airports?search=${query}`),
    ]);

    let destinations = [];

    if (risultati[0].status === 'fulfilled') {
        destinations = await risultati[0].value.json();
    } else {
        console.error('Errore destinations:', risultati[0].reason);
    }

    let weathers = [];

    if (risultati[1].status === 'fulfilled') {
        weathers = await risultati[1].value.json();
    } else {
        console.error('Errore weathers:', risultati[1].reason);
    }

    let airports = [];

    if (risultati[2].status === 'fulfilled') {
        airports = await risultati[2].value.json();
    } else {
        console.error('Errore airports:', risultati[2].reason);
    }

    return {
        city: destinations.length > 0 ? destinations[0].name : null,
        country: destinations.length > 0 ? destinations[0].country : null,
        temperature: weathers.length > 0 ? weathers[0].temperature : null,
        weather: weathers.length > 0 ? weathers[0].weather_description : null,
        airport: airports.length > 0 ? airports[0].name : null
    };
};

getDashboardData('london')
    .then(data => {
        console.log('Dashboard data:', data);

        let messaggio = '';

        if (data.city !== null) {
            messaggio += `${data.city} is in ${data.country}.\n`;
        }
        if (data.temperature !== null) {
            messaggio += `Today there are ${data.temperature} degrees and the weather is ${data.weather}.\n`;
        }
        if (data.airport !== null) {
            messaggio += `The main airport is ${data.airport}.\n`;
        }

        console.log(messaggio);
    })
    .catch(error => console.error(error));