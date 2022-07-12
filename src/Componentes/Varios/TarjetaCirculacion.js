import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import PauseCircleOutlinedIcon from '@mui/icons-material/PauseCircleOutlined';


function TarjetaCirculacion ({estado, velocidad}) {

        return(

        <Card sx={{width: 115, ml:0.4, mt:0.2 }}>
        <CardContent>
                <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                        Velocidad:
                </Typography>
                <Typography variant="h4" component="div">
                        {velocidad} 
                        <Typography sx={{ fontSize: 14, display:'inline-block' }} color="text.secondary" gutterBottom>
                                &nbsp;Km/h:
                        </Typography>
                </Typography>
                <Typography sx={{ fontSize: 14, mt:1 }} color="text.secondary" gutterBottom>
                        Estado:
                </Typography>

                {(estado === 'CIRCULANDO') 
                ? (<CachedOutlinedIcon fontSize='large' sx={{ mt:0.3, ml:2 }}/>)
                : (<PauseCircleOutlinedIcon fontSize='large' sx={{ mt:0.3, ml:2  }}/>)}
                
                
        </CardContent>
        </Card>
    )
}

export default TarjetaCirculacion