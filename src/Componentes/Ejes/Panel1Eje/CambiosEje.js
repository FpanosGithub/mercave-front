import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import BlurCircularIcon from '@mui/icons-material/BlurCircular';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import { pink, green } from '@mui/material/colors';

function CambiosEje ({eje}){
return (
        <>
        <Paper elevation={3} sx={{ height: 252}}>
        <Stack direction="row" spacing={1} sx={{ height: 250}}>
                <Card sx={{ minWidth: 125 }}>
                    <CardContent>
                        <Typography variant="h6" component="div">
                        CAMBIOS
                        </Typography>                       
                    </CardContent>
                </Card>
        </Stack>
        </Paper>
        </>)
}

export default CambiosEje;