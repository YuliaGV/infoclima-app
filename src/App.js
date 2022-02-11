import React, { useState, useEffect} from 'react'
import { Grid } from '@mui/material';
import Container from '@mui/material/Container';
import { Formulario } from './components/Formulario';
import { Clima } from './components/Clima';
import { ClimaMundo } from './components/ClimaMundo';

import logo from './img/logo.png';

function App() {

  const [busqueda, setBusqueda] = useState({
    ciudad: '',
    pais: ''
  });

  const [consultar, setConsultar] = useState(false);

  const [resultado, setResultado] = useState({});

  //Extraer los valores del state
  const { ciudad, pais } = busqueda;

  useEffect(() => {
    const consultarAPI = async () => {

      if(consultar) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=5613d4cf2e98bf1d32ebcd76ee2c3c49`)
          .then(res => res.json())
          .then(data => {
            setResultado(data);
            setConsultar(false);
          })
          .catch(err => console.log(err));
      }
    }
    consultarAPI();
  }, [consultar]);


  return (
    <div className="App">

      <Container style={{ textAlign: 'center' }}>

        <img src={logo} alt="logo" />

        <Grid
        container
        spacing={3}
        >

          <Grid item md={12} xs={12}>
            <ClimaMundo />
          </Grid>

          <Grid item md={6} xs={12}>
            <h3>Encuentra el clima actual</h3>
            <Formulario 
              busqueda={busqueda}
              setBusqueda={setBusqueda}
              setConsultar={setConsultar}
            />
            
          </Grid>

          <Grid item md={6} xs={12}>
            <h3>Resultado</h3>
            <Clima
              resultado={resultado}
            />
          </Grid>



        </Grid>

       

      </Container>
    </div>
  );
}
export default App;
