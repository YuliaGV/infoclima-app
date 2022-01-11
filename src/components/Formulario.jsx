import React, { useState } from 'react'
import { FormControl, Input, Select, InputLabel, MenuItem, Button, Alert } from '@mui/material'
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

            <FormControl
                fullWidth
                required
                margin="normal"
            >
                <InputLabel id="demo-simple-select-label">País</InputLabel>
                <Select
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
                    <MenuItem value="PE">Perú</MenuItem>
                    <MenuItem value="AR">Argentina</MenuItem>
                    <MenuItem value="MX">México</MenuItem>
                    <MenuItem value="ES">España</MenuItem>
                    <MenuItem value="US">Estados Unidos</MenuItem>
                </Select>

            </FormControl>

            <FormControl
                fullWidth
                focused
                required
                margin="normal"
                variant="outlined"
            >
                <Input
                    autoFocus = {true}
                    type = "text"
                    name = "ciudad"
                    id = "ciudad"
                    placeholder = "Escribe una ciudad..."
                    value = {ciudad}
                    onChange = {handleChange} 
                />
            </FormControl>

            <FormControl
                fullWidth
                required
                margin="normal"
            >
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    onClick = {handleSubmit}
                    endIcon={<AiOutlineSend />}
                >
                    Buscar
                </Button>
            </FormControl>



                   



        </>
    )
}
