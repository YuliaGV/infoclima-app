import React from 'react';
import { getClimaDescription } from '../helpers/getDescription';
import { Card, CardContent} from '@mui/material';
import { FiWind } from "react-icons/fi";
import {GiWaterDrop } from "react-icons/gi";


export const Clima = ({resultado}) => {

    const { name, main, weather, sys, wind } = resultado;

    return (
        <div className="clima">

            { name && main && weather && sys && wind ? (

            <Card className="clima-card">
                <CardContent>
                    <div className="clima-info">
                        <h2>{name}, {sys.country}</h2>
                        <p className="clima-info-temp">
                            <p className="clima-temp">{parseFloat(main.temp - 273.15).toFixed(2)} &#8451; </p>
                            <img src={`http://openweathermap.org/img/wn/${weather[0] ? weather[0].icon : ''}@2x.png`} alt="Clima" className="clima-img"/>
                        </p>
                        <p className="clima-info-descripcion">
                            {getClimaDescription(weather[0].description)}
                        </p>
                    </div>
                    <div className="clima-minmax">
                        <div className="clima-min">
                            <p>Min: {parseFloat(main.temp_min - 273.15).toFixed(2)} &#8451;</p>
                        </div>
                        <div className="clima-feel">
                            <small>Sensación térmica: {parseFloat(main.feels_like - 273.15).toFixed(2)} &#8451; </small>
                        </div>
                        <div className="clima-max">
                            <p>Max: {parseFloat(main.temp_max - 273.15).toFixed(2)} &#8451;</p>
                        </div>
                    </div>
                    <div className="clima-info-detalle">
                        <div className="clima-info-detalle-item">
                            <FiWind /> <span>{wind.speed} m/s viento</span>
                        </div>
                        <div className="clima-info-detalle-item">
                            <GiWaterDrop /> <span>{main.humidity} % humedad</span>
                        </div>
                    </div>
                </CardContent>
            </Card>

            ) : (
                <Card className="clima-card" >
                    <CardContent>
                            <h3>No hay resultados para mostrar, haz una consulta</h3>
                    </CardContent>
                </Card>

            )}
       
        </div>
    )
}
