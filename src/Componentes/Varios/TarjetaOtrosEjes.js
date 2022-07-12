import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function TarjetaOtrosEjes ({otros_ejes, vagon}) {
    return(
        <Card sx={{ minWidth: 110 }}>
            <CardContent>
                <Typography sx={{ fontSize: 10 }} gutterBottom>
                        Otros ejes en:
                </Typography>
                <Typography sx={{ fontSize: 16 }} gutterBottom>
                        {vagon}
                </Typography>
                <Button variant="text" sx = {{mb:-1}}>{otros_ejes[1]}</Button>
                <Button variant="text" sx = {{mb:-1}}>{otros_ejes[2]}</Button>
                <Button variant="text" sx = {{mb:-1}}>{otros_ejes[3]}</Button>   
            </CardContent>
            </Card>
    )
}

export default TarjetaOtrosEjes