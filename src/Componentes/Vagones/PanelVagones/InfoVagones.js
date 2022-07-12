import * as React from 'react';
import styled from 'styled-components';
import FiltroVagones from './FiltroVagones';
import ListaVagones from './ListaVagones';
import MapaVagones from './MapaVagones';

function InfoVagones ({filtro, filtro_dispatcher, actores, onSeleccion, vagones})
    {      
    return (
        <PanelInfo>
            <FiltroVagones
                filtro = {filtro} 
                filtro_dispatcher = {filtro_dispatcher}
                actores = {actores} />

            <ListaVagones
                        onSeleccion = {onSeleccion}
                        vagones = {vagones} />   
            <MapaVagones vagones = {vagones} />     
        </PanelInfo>

        )
}

const PanelInfo = styled.div`
    display:grid;
    grid-template-columns: 0.2fr 0.5fr 1fr;
    gap:4px;
    width:100%;
`
export default InfoVagones;