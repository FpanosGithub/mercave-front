import * as React from 'react';
import Panel1Eje from './Panel1Eje/Panel1Eje';
import PanelEjes from './PanelEjes';

//Función que busca el eje seleccionado en la lista de ejes y devuelve un objeto eje
const seleccionarEje = (seleccion, ejes)=> {
        let indice = 0
        if (seleccion !== 'todos') {
                ejes.forEach(comprobar)
                function comprobar(value, index, array) 
                        {
                                if (value.id == seleccion) {indice = index}
                        }
        }
        return ejes[indice]
}
//Función que busca los ejes que van en el vagón del eje seleccionado
const IdentificarEjesMismoVagon = (eje, seleccion, ejes) =>{
        let ejes_mismo_vagon = []
        let vagon = eje.vagon
        if (seleccion !== 'todos') {
                ejes.forEach(comprobar)
                function comprobar(value, index, array) 
                        {
                                if (value.vagon == vagon) {ejes_mismo_vagon.push(value.codigo)}
                        }
        }
        return ejes_mismo_vagon
}
// COMPONENTE //
function ContainerEjes ({seleccion, seleccion_dispatcher, filtro, filtro_dispatcher, actores, ejes})
        {
        //llama a las funciones de datos para recoger los datos a pasar a los componentes hacia abajo
        const eje = seleccionarEje(seleccion.seleccion_eje,ejes)    
        const ejes_mismo_vagon  = IdentificarEjesMismoVagon(eje, seleccion.seleccion_eje, ejes)
        //Render
        return (
                <>
                {(seleccion.seleccion_eje === 'todos') ?
                        (
                        <PanelEjes 
                        filtro = {filtro} 
                        filtro_dispatcher = {filtro_dispatcher}
                        actores = {actores}
                        onSeleccion = {seleccion_dispatcher}
                        ejes = {ejes} />        
                        )
                :                                       
                        (
                        <Panel1Eje
                        eje = {eje}
                        ejes_mismo_vagon = {ejes_mismo_vagon} 
                        onVolver = {seleccion_dispatcher}/>
                        )
                }
                </>
                )
}

export default ContainerEjes;