import styled from 'styled-components';
import TarjetaVolver from '../../Varios/TarjetaVolver'
import Tarjeta12 from '../../Varios/Tarjeta12'
import Tarjeta11 from '../../Varios/Tarjeta11'
import Alarma from '../../Varios/Alarma'
import TarjetaOtrosEjes from '../../Varios/TarjetaOtrosEjes'

function BannerEjes ({eje, ejes_mismo_vagon, onVolver}){
    return(
        <> <PanelBanner>   
                <TarjetaVolver
                        onVolver = {onVolver}
                />
                <Tarjeta12
                        texto1 = 'Eje:'
                        valor1 = {eje.codigo}
                        texto2 = 'Versión:'
                        valor2 = {eje.version}
                        minWidth= {130}/>
                <Alarma tipo= 'Temp.' activa = {eje.alarma_temp}/>
                <Alarma tipo= 'Acelerac.' activa = {eje.alarma_acel}/>
                <Alarma tipo= 'Cambio' activa = {eje.alarma_temp}/>
                <Tarjeta11
                        texto1 = 'Vagón:'
                        valor1 = {eje.vagon}
                        texto2 = 'Bogie:'
                        valor2 = {eje.bogie}
                        minWidth= {160}/>
                <TarjetaOtrosEjes
                        otros_ejes = {ejes_mismo_vagon}
                        vagon = {eje.vagon}/>
                <Tarjeta11
                        texto1 = 'Propietario:'
                        valor1 = {eje.keeper}
                        texto2 = 'Operador:'
                        valor2 = {eje.operador}
                        minWidth= {120}/>
                <Tarjeta12
                        texto1 = 'Fabricante:'
                        valor1 = {eje.fabricante}
                        texto2 = 'Fecha Fab.:'
                        valor2 = {eje.fecha_fab}
                        minWidth= {120}/>
                <Tarjeta12
                        texto1 = 'Mantenedor:'
                        valor1 = {eje.mantenedor}
                        texto2 = 'Fecha Mant:'
                        valor2 = {eje.ultimo_mant}
                        minWidth= {120}/>
                <Tarjeta11
                        texto1 = 'Num. Cambios:'
                        valor1 = {eje.num_cambios}
                        texto2 = 'Km recorridos:'
                        valor2 = {eje.km}
                        minWidth= {145}/>
            </PanelBanner></> 
        )
    }

const PanelBanner = styled.div`
    display:grid;
    grid-template-columns: 0fr 0fr 0fr 0fr 0fr 0fr 0fr 1fr 1fr 1fr 0.6fr;
    gap:3px;
    width:100%;
    height:9.9rem;
`

export default BannerEjes