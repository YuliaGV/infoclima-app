import React, { useState } from 'react'
import { FormControl, Select, InputLabel, TextField, MenuItem, Button, Alert } from '@mui/material'
import { AiOutlineSend } from "react-icons/ai";

export const Formulario = ( { busqueda, setBusqueda, setConsultar } ) => {
    //State del error
    const [error, setError] = useState(false);

    //Extraer los valores del state
    const { ciudad, pais } = busqueda;

    //Funcion que se ejecuta cada vez que el usuario escribe en un input
    const handleChange = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        //Validar el formulario
        if (ciudad.trim() === '' || pais.trim() === '') {
            setError(true);
            return;
        }
        setConsultar(true);

    }
 

    return (
        <>
            {error ? <Alert severity="error">Todos los campos son obligatorios</Alert> : null}

            <div className="form-buscar">

                <form onSubmit={handleSubmit}>
                    <FormControl
                        fullWidth
                        margin="normal"
                    >
                        <InputLabel id="demo-simple-select-label">País</InputLabel>
                        <Select
                            style={{
                                color: 'black',
                            }}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name = "pais"
                            value = {pais}
                            label="País"
                            onChange = {handleChange}
                        >
                            <MenuItem value=""> <em>Selecciona un país</em> </MenuItem>
                            <MenuItem value="CO">Colombia</MenuItem>
                            <MenuItem value="BR">Brasil</MenuItem>
                            <MenuItem value="CL">Chile</MenuItem>
                            <MenuItem value="AR">Argentina</MenuItem>
                            <MenuItem value="MX">México</MenuItem>
                            <MenuItem value="US">Estados Unidos</MenuItem>
                            <MenuItem value="CA">Canadá</MenuItem>
                            <MenuItem value="ES">España</MenuItem>
                            <MenuItem value="FR">Francia</MenuItem>
                            <MenuItem value="DE">Alemania</MenuItem>
                            <MenuItem value="GB">Reino Unido</MenuItem>
                            <MenuItem value="AU">Australia</MenuItem>
                            <MenuItem value="JP">Japón</MenuItem>
                            <MenuItem value="RU">Rusia</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl
                    fullWidth
                    focused
                    required
                    margin="normal"
                    >
                        <TextField
                            id="ciudad"
                            style={{
                                color: 'black',
                            }}
                            name="ciudad"
                            label="Ciudad"
                            value = {ciudad}
                            onChange = {handleChange}
                            autoComplete="off"
                        />
                        
                    </FormControl>
                    <FormControl 
                        fullWidth
                        margin="normal"
                    >
                        <Button
                            type = "submit"
                            variant = "contained"
                            color = "primary"
                            onClick = {handleSubmit}
                            startIcon = {<AiOutlineSend />}
                        >
                            Buscar Clima
                        </Button>
                    </FormControl>

                    </form>     

                </div>      
        </>
    )
}
