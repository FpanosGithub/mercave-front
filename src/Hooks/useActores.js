import * as React from 'react';

const url_operadores = 'http://localhost:8000/organizaciones/operadores';
const url_keepers = 'http://localhost:8000/organizaciones/keepers';
const url_fabricantes = 'http://localhost:8000/organizaciones/fabricantes';
const url_mantenedores = 'http://localhost:8000/organizaciones/mantenedores';
const url_versiones_ejes = 'http://localhost:8000/ingenieria/versiones_ejes';   

function useActores() {
    
    const [actores, setActores] = React.useState(null);
    const [operadores, setOperadores] = React.useState(null);
    const [keepers, setKeepers] = React.useState(null);
    const [fabricantes, setFabricantes] = React.useState(null);
    const [mantenedores, setMantenedores] = React.useState(null);
    const [versiones_ejes, setVersionesEjes] = React.useState(null);

    React.useEffect(() => {
        const getDataBD = async () => {
            try {
                const response_operadores = await fetch(url_operadores);
                let actual_data_operadores = await response_operadores.json();
                setOperadores (actual_data_operadores);

                const response_keepers = await fetch(url_keepers);
                let actual_data_keepers = await response_keepers.json();
                setKeepers (actual_data_keepers);

                const response_fabricantes = await fetch(url_fabricantes);
                let actual_data_fabricantes = await response_fabricantes.json();
                setFabricantes(actual_data_fabricantes);

                const response_mantenedores = await fetch(url_mantenedores);
                let actual_data_mantenedores = await response_mantenedores.json();
                setMantenedores (actual_data_mantenedores)

                const response_versiones_ejes = await fetch(url_versiones_ejes);
                let actual_data_versiones_ejes = await response_versiones_ejes.json();
                setVersionesEjes(actual_data_versiones_ejes)
                }
            catch(err) {let error = (err.message)} 
            };
            getDataBD();
        }, []);

    return  ([ {operadores:operadores,
                keepers:keepers,
                fabricantes:fabricantes,
                mantenedores:mantenedores,
                versiones_ejes:versiones_ejes
                },
            setActores])
}
  
export default useActores;