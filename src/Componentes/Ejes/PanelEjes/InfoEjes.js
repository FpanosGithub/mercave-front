import * as React from 'react';
import styled from 'styled-components';
import FiltroEjes from './FiltroEjes';
import ListaEjes from './ListaEjes';
import MapaEjes from './MapaEjes';

function InfoEjes ({filtro, filtro_dispatcher, actores, onSeleccion, ejes})
    {      
    return (
        <PanelInfo>
            <FiltroEjes
                filtro = {filtro} 
                filtro_dispatcher = {filtro_dispatcher}
                actores = {actores} />

            <ListaEjes
                        onSeleccion = {onSeleccion}
                        ejes = {ejes} />   
            <MapaEjes ejes = {ejes} />     
        </PanelInfo>

        )
}

const PanelInfo = styled.div`
    display:grid;
    grid-template-columns: 0.2fr 0fr 1fr;
    gap:4px;
    width:100%;
`
export default InfoEjes;