import * as React from 'react';
import styled from 'styled-components';
import BannerVagones from './BannerVagones';
import InfoVagones from './InfoVagones';
import AlarmasVagones from './AlarmasVagones';

const FiltrarVagones = (filtro, vagones)=> {
        return vagones
}

function PanelVagones ({filtro, filtro_dispatcher, actores, onSeleccion, vagones})
        {
        const vagones_filtrados = FiltrarVagones(filtro, vagones)       
        return (
                <PanelContenido>
                    <BannerVagones/>
                    <InfoVagones 
                        filtro = {filtro} 
                        filtro_dispatcher = {filtro_dispatcher}
                        actores = {actores}
                        onSeleccion = {onSeleccion}
                        vagones = {vagones_filtrados} />   
                    <AlarmasVagones 
                        vagones = {vagones_filtrados} />     
                </PanelContenido>
        )
}

const PanelContenido = styled.div`
  display:grid;
  grid-template-rows: 10.8rem 1fr 0.5fr;
  gap:4px;
`
export default PanelVagones;