import * as React from 'react';
import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function AlarmasEjes ({filtro, filtro_dispatcher, actores, ejes})
    {      
    return (
        <>
        <PanelAlarmasEjes>
        <Paper elevation = {3} sx={{minWidth:'100%'}}>
            <Typography variant="h5" component="h2" sx={{ml:2, mt:2}}>
                ...
            </Typography>     
        </Paper>  
        </PanelAlarmasEjes>
        </>
    )
    }

const PanelAlarmasEjes = styled.div`
display:grid;
padding:1px 2px 2px 2px;
`

export default AlarmasEjes;