import * as React from 'react';
import Panel1Vagon from './Panel1Vagon/Panel1Vagon';
import PanelVagones from './PanelVagones';

//Función que busca el eje seleccionado en la lista de ejes y devuelve un objeto eje
const seleccionarVagon = (seleccion, vagones)=> {
        let indice = 0
        if (seleccion !== 'todos') {
                vagones.forEach(comprobar)
                function comprobar(value, index, array) 
                        {
                                if (value.id == seleccion) {indice = index}
                        }
        }
        return vagones[indice]
}

// COMPONENTE //
function ContainerVagones ({seleccion, seleccion_dispatcher, filtro, filtro_dispatcher, actores, vagones})
        {
        //llama a las funciones de datos para recoger los datos a pasar a los componentes hacia abajo
        const vagon = seleccionarVagon(seleccion.seleccion_vagon,vagones)    
        //Render
        return (
                <>
                {(seleccion.seleccion_vagon === 'todos') ?
                        (
                        <PanelVagones 
                        filtro = {filtro} 
                        filtro_dispatcher = {filtro_dispatcher}
                        actores = {actores}
                        onSeleccion = {seleccion_dispatcher}
                        vagones = {vagones} />        
                        )
                :                                       
                        (
                        <Panel1Vagon
                        vagon = {vagon}
                        onVolver = {seleccion_dispatcher}/>
                        )
                }
                </>
                )
}

export default ContainerVagones;