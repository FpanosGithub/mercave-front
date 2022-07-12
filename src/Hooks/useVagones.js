import * as React from 'react';

const url_vagones = 'http://localhost:8000/material/vagones';

function useVagones() {
    
    const [vagones, setVagones] = React.useState(null);

    React.useEffect(() => {
        const getDataBD = async () => {
            try {
                const response = await fetch(url_vagones);
                let actual_data = await response.json();
                setVagones (actual_data);
                }
            catch(err) {let error = (err.message)} 
            };
            getDataBD();
        }, []);

    return  ([ {vagones:vagones}, setVagones])
}
  
export default useVagones;