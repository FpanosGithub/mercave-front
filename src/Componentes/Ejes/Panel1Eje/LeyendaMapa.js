import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Brightness1TwoToneIcon from '@mui/icons-material/Brightness1TwoTone';
import { pink, green, red, orange, purple, blue,  } from '@mui/material/colors';
import { flexbox } from '@mui/system';

export default function LeyendaMapa() {

return (
    <>
    <Paper elevation = {5}>
        <Typography variant="h6" component="h2" color="text.secondary" sx = {{ml:1, mt:1, }}>
            Leyenda Mapa:
        </Typography>
        <Stack direction="row" spacing={0} sx={{ height: 50, alignItems:'center', mt:2, mb:1}}>
            <Brightness1TwoToneIcon sx={{ color: green[900], ml:1, alignSelf:'left' }}/>
            <Typography variant="body1" component="h2" color="text.secondary" sx = {{ml:2}}>
                    Arranca
            </Typography>
        </Stack>
        <Stack direction="row" spacing={0} sx={{ height: 50, mb:1, alignItems:'center'}}>
            <Brightness1TwoToneIcon sx={{ color: red[900], ml:1, alignSelf:'left' }}/>
            <Typography variant="body1" component="h2" color="text.secondary" sx = {{ml:2,}}>
                    Para
            </Typography>
        </Stack>
        <Stack direction="row" spacing={0} sx={{ height: 50, mb:1, alignItems:'center'}}>
            <Brightness1TwoToneIcon sx={{ color: orange[700], ml:1, alignSelf:'left' }}/>
            <Typography variant="body1" component="h2" color="text.secondary" sx = {{ml:2,}}>
                    Nudo
            </Typography>
        </Stack>
        <Stack direction="row" spacing={0} sx={{ height: 50, mb:1, alignItems:'center'}}>
            <Brightness1TwoToneIcon sx={{ color: red[400], ml:1, alignSelf:'left' }}/>
            <Typography variant="body1" component="h2" color="text.secondary" sx = {{ml:2,}}>
                    Alarma
            </Typography>
        </Stack>
        <Stack direction="row" spacing={0} sx={{ height: 50, mb:1, alignItems:'center'}}>
            <Brightness1TwoToneIcon sx={{ color: purple[500], ml:1, alignSelf:'left' }}/>
            <Typography variant="body1" component="h2" color="text.secondary" sx = {{ml:2,}}>
                    Cambio
            </Typography>
        </Stack>
        <Stack direction="row" spacing={0} sx={{ height: 50, mb:1, alignItems:'center'}}>
            <Brightness1TwoToneIcon sx={{ color: pink[300], ml:1, alignSelf:'left' }}/>
            <Typography variant="body1" component="h2" color="text.secondary" sx = {{ml:2,}}>
                    Mto.
            </Typography>
        </Stack>
        <Stack direction="row" spacing={0} sx={{ height: 50, mb:1, alignItems:'center'}}>
            <Brightness1TwoToneIcon sx={{ color: blue[700], ml:1, alignSelf:'left' }}/>
            <Typography variant="body1" component="h2" color="text.secondary" sx = {{ml:2,}}>
                    Circulac. - Hoy
            </Typography>
        </Stack>
        <Stack direction="row" spacing={0} sx={{ height: 50, mb:1, alignItems:'center'}}>
            <Brightness1TwoToneIcon sx={{ color: blue[400], ml:1, alignSelf:'left' }}/>
            <Typography variant="body1" component="h2" color="text.secondary" sx = {{ml:2,}}>
                Circulac. - Ayer
            </Typography>
        </Stack>
        <Stack direction="row" spacing={0} sx={{ height: 50, mb:1, alignItems:'center'}}>
            <Brightness1TwoToneIcon sx={{ color: blue[200], ml:1, alignSelf:'left' }}/>
            <Typography variant="body1" component="h2" color="text.secondary" sx = {{ml:2,}}>
                Circulac. - Anterior
            </Typography>
        </Stack>
    </Paper>
    </>
)



}