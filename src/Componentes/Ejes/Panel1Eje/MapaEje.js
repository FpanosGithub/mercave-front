import * as React from 'react';

function MapaEje ({eje}){
    const id = eje.id
    const [mapa, setMapa] = React.useState(null)
    const [error_mapa, setErrorMapa] = React.useState(null)
    const [loading_mapa, setLoadingMapa] = React.useState(true)
    const url_mapa_eje = `http://localhost:8000/mapas/mapa_ejes/${id}`;
    
    React.useEffect(() => {
        const getDataMapa = async () => {
            try {
                const response = await fetch(url_mapa_eje);
                if (!response.ok) {throw new Error(`HTTP error: The status is ${response.status}`);}
                let actualData = await response.json();
                setMapa(actualData);
                } 
            catch(err) {setErrorMapa(err.message)} 
            finally {setLoadingMapa(false)}  
        }
        getDataMapa()
        }, []);

    return(
        <>
        {error_mapa && <p>&nbsp;&nbsp;Algo falló cargando el mapa del eje ....</p>}
        {loading_mapa ? (<p>&nbsp;&nbsp;Cargando.......</p>) : (
        <div dangerouslySetInnerHTML={{ __html: mapa }} />)}
        </>
    );
}

export default MapaEje