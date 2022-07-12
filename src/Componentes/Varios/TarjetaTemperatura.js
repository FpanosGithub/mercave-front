import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { pink, green, red, orange, purple, blue, grey } from '@mui/material/colors';


function TarjetaTemperatura ({tempa, tempb}) {
        
        function color (temp) {
                let codigoColor = red[500]
                if (temp <= -10) {codigoColor = blue[300]}
                else if (temp <= -0) {codigoColor = blue[600]}
                else if (temp <= 10) {codigoColor = grey[500]}
                else if (temp <= 20) {codigoColor = green[500]}
                else if (temp <= 30) {codigoColor = purple[500]}
                else if (temp <= 40) {codigoColor = orange[500]}
                else if (temp <=50) {codigoColor = pink[300]}
                else if (temp <=60) {codigoColor = red[300]}
                else if (temp <=90) {codigoColor = red[500]}
                return codigoColor
        }
        let colora = color(tempa)
        let colorb = color(tempb)
        return(
        <Card sx={{ width: 130, ml:0.4, mt:0.2 }}>
            <CardContent>
                <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                        Temperatura
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Rueda A:
                </Typography>
                <Typography variant="h5" component="div" sx={{color: colora}}>
                        {tempa} º
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Rueda B:
                </Typography>
                <Typography variant="h5" component="div" sx={{color: colorb}}>
                        {tempb} º
                </Typography>
            </CardContent>
            </Card>
    )
}

export default TarjetaTemperatura