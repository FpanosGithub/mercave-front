import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import LensBlurOutlinedIcon from '@mui/icons-material/LensBlurOutlined';
import { pink, green } from '@mui/material/colors';

function Alarma ({tipo, activa}) {
    return(
            <Card sx={{width:90}}>
            <CardContent>
            <Typography sx={{ fontSize: 16, textAlign:'center' }} color="text.secondary" gutterBottom>
                    Alarma {tipo}
            </Typography>  
            
            <Paper elevation = {1} sx={{ display: 'flex', alignContent: 'center', justifyContent: 'center',  ml:1, mt:1, mb:2, width:50, height:35}}>
            {(activa) ? (<LensBlurOutlinedIcon fontSize='large' sx={{ color: pink[500], mt:0.2 }}/>)
                      : (<LensBlurOutlinedIcon fontSize='large' sx={{ color: green[500], mt:0.2  }}/>)}
            </Paper>  
            <Button size="small" variant="outlined">Reset</Button>
            </CardContent>
            </Card>
    )
}

export default Alarma