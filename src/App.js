import React, { useState, useEffect} from 'react'
import { Grid } from '@mui/material';
import Container from '@mui/material/Container';
import { Formulario } from './components/Formulario';
import { Clima } from './components/Clima';

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
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=5613d4cf2e98bf1d32ebcd76ee2c3c49`)
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

        <Grid
        container
        spacing={12}
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
        
        >

          <Grid item md={5} xs={12}>
            <img src={logo} alt="logo" />
            <h3>Encuentra el clima actual</h3>
            <Formulario 
              busqueda={busqueda}
              setBusqueda={setBusqueda}
              setConsultar={setConsultar}
            />
            
          </Grid>

          <Grid item md={7} xs={12}>
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
