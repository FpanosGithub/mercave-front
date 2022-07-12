import * as React from 'react';
import styled from 'styled-components';
import BannerEje from './BannerEje';
import DetalleEventosEje from './DetalleEventos';
import ListaEventosEje from './ListaEventosEje';
import MapaEje from './MapaEje';
import LeyendaMapa from './LeyendaMapa';


function Panel1Eje ({eje, ejes_mismo_vagon, onVolver}){
    const id = eje.id
    // Cargamos eventos de circulación
    const [eventos, setEventos] = React.useState(null)
    const [error_eventos, setErrorEventos] = React.useState(null)
    const [loading_eventos, setLoadingEventos] = React.useState(true)
    const url_eventos = `http://localhost:8000/eventos/eventos_eje/${id}`;
    React.useEffect(() => {
        const getDataEventos = async () => {
            try {
                const response = await fetch(url_eventos);
                if (!response.ok) {throw new Error(`HTTP error: The status is ${response.status}`);}
                let actualData = await response.json();
                setEventos(actualData);
                } 
            catch(err) {setErrorEventos(err.message)} 
            finally {setLoadingEventos(false)}  
        }
        getDataEventos()
        }, []);
    // Cargamos Datos detallados de circulación del eje para gráficas
    const [detalle_eje, setDetalle] = React.useState(null)
    const [error_detalle, setErrorDetalle] = React.useState(null)
    const [loading_detalle, setLoadingDetalle] = React.useState(true)
    const url_detalle = `http://localhost:8000/eventos/datos_circulacion_eje/${id}/`;
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "comienzo":"07/04/2022 22:32:22","fin":"07/07/2022 22:32:22"})
    };
    React.useEffect(() => {
        const getDetalleEje = async () => {
            try {
                const response = await fetch(url_detalle, requestOptions);
                if (!response.ok) {throw new Error(`HTTP error: The status is ${response.status}`);}
                let actualData = await response.json();
                setDetalle(actualData);
                } 
            catch(err) {setErrorDetalle(err.message)} 
            finally {setLoadingDetalle(false)}  
        }
        getDetalleEje()
        }, []);

    // Renderizado contenido de 1 eje
    return (
        <PanelContenido>
            <PanelBanner>
                <BannerEje 
                    eje={eje} 
                    ejes_mismo_vagon = {ejes_mismo_vagon}
                    onVolver = {onVolver}/>
            </PanelBanner>
            <PanelGraficasEventos>
                {error_detalle && <p>&nbsp;&nbsp;Algo falló cargando los detalles de circulación del eje para gráficos....</p>}
                {loading_detalle ? 
                    (<p>&nbsp;&nbsp;Cargando.......</p>)
                        : 
                    (<DetalleEventosEje 
                        eje = {eje} 
                        detalle = {detalle_eje} />)}
            </PanelGraficasEventos>
            <FranjaMapa>
                <PanelListaEventos>
                    {error_eventos && <p>&nbsp;&nbsp;Algo falló cargando la lista de eventos de circulación del eje ....</p>}
                    {loading_eventos ? 
                        (<p>&nbsp;&nbsp;Cargando.......</p>)
                            : 
                        (<ListaEventosEje eventos={eventos}></ListaEventosEje>)}
                </PanelListaEventos>
                <MapaEje eje = {eje}/>
                <PanelLeyendaMapa>
                    <LeyendaMapa/>
                </PanelLeyendaMapa>
            </FranjaMapa>
        </PanelContenido>
        )
}


const PanelContenido = styled.div`
  display:grid;
  grid-template-rows: 10rem 11.4rem 1fr;
  gap: 3px 5px;
  min-height: 100%;
  width:100%;
  margin-top:2px;
  margin-bottom:8px
  `
  const PanelBanner = styled.div`
    display:grid;
  `
  const PanelGraficasEventos = styled.div`
    display:grid;
`
  const FranjaMapa = styled.div`
    display:grid;
    padding:5px, 5px;
    gap:6px;
    grid-template-columns: 0fr 1fr 0.18fr;
`
const PanelListaEventos = styled.div`
    display:grid;
    padding:1px, 1px;
    margin-left: 1px;
`
const PanelLeyendaMapa = styled.div`
    display:grid;
    padding:1px, 1px;
    margin-left: 1px;
    margin-right: 3px;
`
export default Panel1Eje;