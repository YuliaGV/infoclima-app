export const getClimaDescription = (weather) => {

    let climaDescription = '';

    weather === 'clear sky' ? climaDescription = 'Cielo despejado' :
    weather === 'few clouds' ? climaDescription = 'Algunas nubes' :
    weather === 'scattered clouds' ? climaDescription = 'Nubes dispersas' :
    weather === 'broken clouds' ? climaDescription = 'Nubes dispersas' :
    weather === 'shower rain' ? climaDescription = 'Lluvia' :
    weather === 'rain' ? climaDescription = 'Lluvia' :
    weather === 'thunderstorm' ? climaDescription = 'Tormenta' :
    weather === 'snow' ? climaDescription = 'Nieve' :
    weather === 'mist' ? climaDescription = 'Nublado' :
    weather === 'overcast clouds' ? climaDescription = 'Nublado' :
    weather === 'light rain' ? climaDescription = 'Lluvia ligera' :
    weather === 'moderate rain' ? climaDescription = 'Lluvia moderada' :
    weather === 'heavy intensity rain' ? climaDescription = 'Lluvia intensa' :
    weather === 'very heavy rain' ? climaDescription = 'Lluvia muy intensa' :
    weather === 'extreme rain' ? climaDescription = 'Lluvia extremadamente intensa' :
    weather === 'freezing rain' ? climaDescription = 'Lluvia helada' :
    weather === 'light intensity shower rain' ? climaDescription = 'Lluvia ligera' :
    weather === 'heavy intensity shower rain' ? climaDescription = 'Lluvia intensa' :
    weather === 'ragged shower rain' ? climaDescription = 'Lluvia dispersa' :
    weather === 'light snow' ? climaDescription = 'Nieve ligera' :
    weather === 'snow' ? climaDescription = 'Nieve' :
    weather === 'heavy snow' ? climaDescription = 'Nieve intensa' :
    weather === 'sleet' ? climaDescription = 'Nieve y lluvia' :
    weather === 'shower sleet' ? climaDescription = 'Nieve y lluvia dispersa' :
    weather === 'light rain and snow' ? climaDescription = 'Lluvia y nieve ligera' :
    weather === 'rain and snow' ? climaDescription = 'Lluvia y nieve' :
    weather === 'light shower snow' ? climaDescription = 'Nieve y lluvia ligera' :
    weather === 'shower snow' ? climaDescription = 'Nieve y lluvia' :
    weather === 'heavy shower snow' ? climaDescription = 'Nieve y lluvia intensa' :
    weather === 'smoke' ? climaDescription = 'Niebla' :
    weather === 'haze' ? climaDescription = 'Niebla' :
    weather === 'sand, dust whirls' ? climaDescription = 'Niebla' :
    weather === 'fog' ? climaDescription = 'Niebla' :
    weather === 'sand' ? climaDescription = 'Arena' :
    weather === 'dust' ? climaDescription = 'Polvo' :
    weather === 'volcanic ash' ? climaDescription = 'Niebla' :
    weather === 'squalls' ? climaDescription = 'Niebla' :
    weather === 'tornado' ? climaDescription = 'Tormenta' :
    weather === 'tropical storm' ? climaDescription = 'Tormenta tropical' :
    weather === 'hurricane' ? climaDescription = 'Huracán' :
    weather === 'cold' ? climaDescription = 'Frío' :
    weather === 'hot' ? climaDescription = 'Calor' :
    weather === 'windy' ? climaDescription = 'Vientoso' :
    weather === 'hail' ? climaDescription = 'Granizo' :
    weather === 'calm' ? climaDescription = 'Calma' :
    weather === 'light breeze' ? climaDescription = 'Brisa ligera' :
    weather === 'gentle breeze' ? climaDescription = 'Brisa suave' :
    weather === 'moderate breeze' ? climaDescription = 'Brisa moderada' :
    weather === 'fresh breeze' ? climaDescription = 'Brisa fresca' :
    weather === 'strong breeze' ? climaDescription = 'Brisa fuerte' :
    weather === 'high wind, near gale' ? climaDescription = 'Viento fuerte' :
    weather === 'gale' ? climaDescription = 'Viento fuerte' :
    weather === 'severe gale' ? climaDescription = 'Viento fuerte' :
    weather === 'storm' ? climaDescription = 'Tormenta' :
    weather === 'thunderstorm with heavy rain' ? climaDescription = 'Tormenta violenta' :
    weather === 'thunderstorm with rain' ? climaDescription = 'Tormenta' :
    weather === 'thunderstorm with light drizzle' ? climaDescription = 'Tormenta' :
    weather === 'thunderstorm with drizzle' ? climaDescription = 'Tormenta' :
    weather === 'thunderstorm' ? climaDescription = 'Tormenta' :
    weather === 'heavy intensity drizzle' ? climaDescription = 'Lluvia' :
    weather === 'light intensity drizzle' ? climaDescription = 'Lluvia' :
    weather === 'drizzle' ? climaDescription = 'Lluvia' :
    weather === 'heavy intensity drizzle rain' ? climaDescription = 'Lluvia' :
    weather === 'light intensity drizzle rain' ? climaDescription = 'Lluvia' :
    weather === 'drizzle rain' ? climaDescription = 'Lluvia' :
    weather === 'shower rain and drizzle' ? climaDescription = 'Lluvia' :
    weather === 'heavy shower rain and drizzle' ? climaDescription = 'Lluvia' :
    climaDescription = 'Desconocido';

    return climaDescription;

}