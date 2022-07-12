import * as React from 'react';

const url_bogies = 'http://localhost:8000/material/bogies';

function useBogies() {
    
    const [bogies, setBogies] = React.useState(null);

    React.useEffect(() => {
        const getDataBD = async () => {
            try {
                const response = await fetch(url_bogies);
                let actual_data = await response.json();
                setBogies (actual_data);
                }
            catch(err) {let error = (err.message)} 
            };
            getDataBD();
        }, []);

    return  ([ {bogies:bogies}, setBogies])
}
  
export default useBogies;