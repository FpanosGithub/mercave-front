import * as React from 'react';

function MapaVagones (){
    const [mapa, setMapa] = React.useState(null)
    const [error_mapa, setErrorMapa] = React.useState(null)
    const [loading_mapa, setLoadingMapa] = React.useState(true)
    const url_mapa_vagones = 'http://localhost:8000/mapas/mapa_vagones';
    
    React.useEffect(() => {
        const getDataMapa = async () => {
            try {
                const response = await fetch(url_mapa_vagones);
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
        <div className='mapa'>
            {error_mapa && <p>&nbsp;&nbsp;Algo falló cargando el mapa de vagones ....</p>}
            {loading_mapa ? (<p>&nbsp;&nbsp;Cargando.......</p>) : (
                    <> <div dangerouslySetInnerHTML={{ __html: mapa }} /> </>)}
        </div>
        </>
    );
}

export default MapaVagones