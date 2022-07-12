import * as React from 'react';
import styled from 'styled-components';


function Panel1Vagon ({vagon, onVolver}){
    const id = vagon.id
    // Renderizado contenido de 1 vagon
    return (
        <>
            <h1>{id}</h1>
        </>
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
    grid-template-columns: 0.3fr 1fr 0.18fr;
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
export default Panel1Vagon;