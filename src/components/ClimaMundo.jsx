import React, { useState, useEffect } from 'react';
import { getClimaDescription } from '../helpers/getDescription';
import { Card, CardContent, Grid} from '@mui/material';

export const ClimaMundo = () => {

    //New York Weather
    const [newYork, setNewYork] = useState({});

    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=New%20York&appid=5613d4cf2e98bf1d32ebcd76ee2c3c49')
            .then(res => res.json())
            .then(data => {
                setNewYork(data);
            })
            .catch(err => console.log(err));
    }, []);

    const { main:mainNY, weather:weatherNY } = newYork;

    //Bogota Weather
    const [bogota, setBogota] = useState({});

    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Bogota&appid=5613d4cf2e98bf1d32ebcd76ee2c3c49')
            .then(res => res.json())
            .then(data => {
                setBogota(data);
            })
            .catch(err => console.log(err));
    }, []);

    const { main:mainBogota, weather:weatherBogota } = bogota;

    //Madrid Weather
    const [madrid, setMadrid] = useState({});

    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Madrid&appid=5613d4cf2e98bf1d32ebcd76ee2c3c49')
            .then(res => res.json())
            .then(data => {
                setMadrid(data);
            })
            .catch(err => console.log(err));
    }, []);

    const { main:mainMadrid, weather:weatherMadrid } = madrid;

    //Tokyo Weather
    const [tokyo, setTokyo] = useState({});

    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=5613d4cf2e98bf1d32ebcd76ee2c3c49')
            .then(res => res.json())
            .then(data => {
                setTokyo(data);
            })
            .catch(err => console.log(err));
    }, []);

    const { main:mainTokyo, weather:weatherTokyo } = tokyo;


  return (
    <div className="clima">
        <h3>En este momento...</h3>

        <Grid container spacing={3}>

            <Grid item md={3} xs={6}>
                <Card className="card">
                    <CardContent>
                        <h2>New York</h2>
                        { mainNY && weatherNY ? (
                            <div>
                                <div className="clima-temp">
                                    <p className="clima-temp">{parseFloat(mainNY.temp - 273.15).toFixed(2)} &#8451; </p>
                                    <img src={`http://openweathermap.org/img/wn/${weatherNY[0] ? weatherNY[0].icon : ''}@2x.png`} alt="Clima" width={50} />
                                </div>
                                <p className="clima-info-descripcion">{getClimaDescription(weatherNY[0] ? weatherNY[0].description : '')}</p>
                            </div>
                        ) : <p>No hay datos disponibles</p>}
                    </CardContent>
                </Card>
            </Grid>


            <Grid item md={3} xs={6}>
                <Card className="card">
                    <CardContent>
                        <h2>Tokio</h2>
                        { mainTokyo && weatherTokyo ? (
                            <div>
                                <div className="clima-temp">
                                    <p className="clima-temp">{parseFloat(mainTokyo.temp - 273.15).toFixed(2)} &#8451; </p>
                                    <img src={`http://openweathermap.org/img/wn/${weatherTokyo[0] ? weatherTokyo[0].icon : ''}@2x.png`} alt="Clima" width={50} />
                                </div>
                                <p className="clima-info-descripcion">{getClimaDescription(weatherTokyo[0] ? weatherTokyo[0].description : '')}</p>
                            </div>
                        ) : <p>No hay datos disponibles</p>}
                    </CardContent>
                </Card>
            </Grid>
            <Grid item md={3} xs={6}>
                <Card className="card">
                    <CardContent>
                        <h2>Bogotá</h2>
                        { mainBogota && weatherBogota ? (
                            <div>
                                <div className="clima-temp">
                                    <p className="clima-temp">{parseFloat(mainBogota.temp - 273.15).toFixed(2)} &#8451; </p>
                                    <img src={`http://openweathermap.org/img/wn/${weatherBogota[0] ? weatherBogota[0].icon : ''}@2x.png`} alt="Clima" width={50} />
                                </div>
                                <p className= "clima-info-descripcion ">{getClimaDescription(weatherBogota[0] ? weatherBogota[0].description : '')}</p>
                            </div>
                        ) : <p>No hay datos disponibles</p>}
                    </CardContent>
                </Card>
            </Grid>
            <Grid item md={3} xs={6}>
                <Card className="card">
                    <CardContent>
                        <h2>Madrid</h2>
                        { mainMadrid && weatherMadrid ? (
                            <div>
                                <div className="clima-temp">
                                    <p className="clima-temp">{parseFloat(mainMadrid.temp - 273.15).toFixed(2)} &#8451; </p>
                                    <img src={`http://openweathermap.org/img/wn/${weatherMadrid[0] ? weatherMadrid[0].icon : ''}@2x.png`} alt="Clima" width={50} />
                                </div>
                                <p className="clima-info-descripcion">{getClimaDescription(weatherMadrid[0] ? weatherMadrid[0].description : '')}</p>
                            </div>
                        ) : <p>No hay datos disponibles</p>}
                    </CardContent>
                </Card>
            </Grid>


        </Grid>
       
    </div>
    )
}

