import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';



function SelectorFechasEventos ({fecha_inicio, fecha_fin, minWidth}) {
    return(
        <Card sx={{ minWidth: {minWidth}}}>
            <CardContent>
                <Typography sx={{ fontSize: 16, mb:1.2 }} color="text.secondary" gutterBottom>
                        Rango Eventos Mostrados:
                </Typography>
                <TextField
                    id="fecha_fin"
                    label="Hasta"
                    defaultValue="2022/07/11 12:00:00"
                    sx = {{mb:1}}/>
                <TextField
                    id="fecha_inicio"
                    label="Desde"
                    defaultValue="2022/07/03 18:43:11"/>
            </CardContent>
            </Card>
    )
}

export default SelectorFechasEventos