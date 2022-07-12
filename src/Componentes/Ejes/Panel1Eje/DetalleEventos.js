import styled from 'styled-components';
import GraficoVelocidad from '../../Varios/GraficoVelocidad';
import GraficoTemperaturas from '../../Varios/GraficoTemperaturas';
import SelectorFechasEventos from '../../Varios/SelectorFechasEventos';
import TarjetaIr from '../../Varios/TarjetaIr';

function DetalleEventosEje ({eje, detalle}){
        console.log('!!!!!!!!!!!!!')
        console.log(eje)
        console.log(detalle)
        return (
        <><PanelDetalle>
            <SelectorFechasEventos minWidth = {242}/>
            <TarjetaIr/>
            <GraficoVelocidad detalle = {detalle} eje = {eje}/>
            <GraficoTemperaturas detalle = {detalle} eje = {eje}/>
        </PanelDetalle></>)
}

const PanelDetalle = styled.div`
        display:grid;
        grid-template-columns: 0fr 0fr 0.7fr 1fr;
        gap:3px;
        width:100%;
        height:11.3rem;
`


export default DetalleEventosEje;


//<img src = {imagen1}></img>