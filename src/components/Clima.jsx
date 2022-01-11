import React from 'react';
import { Card, CardContent} from '@mui/material';
import { FiWind } from "react-icons/fi";
import {GiWaterDrop } from "react-icons/gi";


export const Clima = ({resultado}) => {

    const { name, main, weather, sys, wind } = resultado;
    console.log(resultado);


    return (
        <div className="clima">

            { name && main && weather && sys && wind ? (

            <Card className="clima-card">
                <CardContent>
                    <div className="clima-info">
                        <h2>{name}, {sys.country}</h2>
                        <p className="clima-info-temp">
                            <span className="clima-temp">{parseFloat(main.temp - 273.15).toFixed(2)} &#8451; </span>
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
                            <h3>Actualmente no hay resultados</h3>
                    </CardContent>
                </Card>

            )}
       
        </div>
    )
}
