import * as React from 'react';
import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import SelectorKeeper from '../../Varios/SelectorKeeper';
import SelectorOperador from '../../Varios/SelectorOperador';
import SelectorFabricante from '../../Varios/SelectorFabricante';
import SelectorMantenedor from '../../Varios/SelectorMantenedor';
import SelectorVersion from '../../Varios/SelectorVersion';
import SelectorVagon from '../../Varios/SelectorVagon';


function FiltroEjes ({filtro, filtro_dispatcher, actores, ejes})
    {      
    return (
        <>
        <PanelFiltro>
            <Paper elevation = {2}>
                <Typography variant="h5" component="h2" sx = {{ml:1, mt:1,}}>
                        Filtro
                </Typography>
            <SelectorKeeper></SelectorKeeper>
            <SelectorOperador></SelectorOperador>
            <SelectorFabricante></SelectorFabricante>
            <SelectorMantenedor></SelectorMantenedor>
            <SelectorVersion></SelectorVersion>
            <SelectorVagon></SelectorVagon>
            <Button size="medium" variant="outlined" sx ={{ml:1, mb:1, color:'green'}}>Aplicar Filtro</Button>
            </Paper>

        </PanelFiltro>
        
        </>
    )
    }

const PanelFiltro = styled.div`
    display:grid;
    grid-column: 1;
    padding-left:1px;
`

export default FiltroEjes;