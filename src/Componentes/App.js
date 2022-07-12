import * as React from 'react';
import styled from 'styled-components';
import seleccionReducer from '../Hooks/seleccionReducer';
import filtroReducer from '../Hooks/filtroReducer';
import useActores from '../Hooks/useActores';
import useEjes from '../Hooks/useEjes';
import useBogies from '../Hooks/useBogies';
import useVagones from '../Hooks/useVagones';
import ResponsiveAppBar from './Menu/MeniMui';
import ContainerEjes from './Ejes';
import ContainerVagones from './Vagones';

const seleccion_inicial = {menu:'Bogies', seleccion_eje:'todos', seleccion_vagon:'todos', seleccion_bogie:'todos', seleccion_cambiador:'todos'};
const filtro_inicial = {operadores:[], keepers:[], fabricantes:[], mantenedores:[], versiones_ejes:[]};


function App() {

  const [actores, setActores] = useActores()
  const [ejes, setEjes] = useEjes()
  const [bogies, setBogies] = useBogies()
  const [vagones, setVagones] = useVagones()
  const [seleccion, seleccionDispatcher] = React.useReducer(seleccionReducer, seleccion_inicial)
  const [filtro, filtroDispatcher] = React.useReducer(filtroReducer, filtro_inicial)
  
  const MuestraComponente = () => {
    if (seleccion.menu === 'Ejes') 
      { return <ContainerEjes 
        seleccion = {seleccion} 
        seleccion_dispatcher = {seleccionDispatcher}
        filtro = {filtro} 
        filtro_dispatcher = {filtroDispatcher}
        actores = {actores} 
        ejes = {ejes.ejes} />
        }
    if (seleccion.menu === 'Vagones') 
      { return <ContainerVagones 
        seleccion = {seleccion} 
        seleccion_dispatcher = {seleccionDispatcher}
        filtro = {filtro} 
        filtro_dispatcher = {filtroDispatcher}
        actores = {actores} 
        vagones = {vagones.vagones} />
          }

    }
  
    return (<>
      <ResponsiveAppBar onClick = {seleccionDispatcher}/>
      <PanelContenido>
        <MuestraComponente/>
      </PanelContenido>
      <PanelFooter>@Tria 2023</PanelFooter>
    </>);
}

const PanelContenido = styled.div`
  display:grid;
  gap: 3px 3px;
  height: 100%;
  width:100%;
  background-color:rgb(235, 201, 107);
  margin-top:2px;
  padding: 1px -3px 3px 1px;
  border: 1px solid;
`
const PanelFooter = styled.div`
  padding:10px 10px;

`

export default App;
