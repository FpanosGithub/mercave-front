import * as React from 'react';
import styled from 'styled-components';
import BannerEjes from './BannerEjes';
import InfoEjes from './InfoEjes';
import AlarmasEjes from './AlarmasEjes';

const FiltrarEjes = (filtro, ejes)=> {
        return ejes
}

function PanelEjes ({filtro, filtro_dispatcher, actores, onSeleccion, ejes})
        {
        const ejes_filtrados = FiltrarEjes(filtro, ejes)       
        return (
                <PanelContenido>
                    <BannerEjes/>
                    <InfoEjes 
                        filtro = {filtro} 
                        filtro_dispatcher = {filtro_dispatcher}
                        actores = {actores}
                        onSeleccion = {onSeleccion}
                        ejes = {ejes_filtrados} />   
                    <AlarmasEjes 
                        ejes = {ejes_filtrados} />     
                </PanelContenido>
        )
}

const PanelContenido = styled.div`
  display:grid;
  grid-template-rows: 10.8rem 1fr 0.5fr;
  gap:4px;
`
export default PanelEjes;