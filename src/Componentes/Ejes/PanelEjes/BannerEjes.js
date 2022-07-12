import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function BannerEjes (){
    return(
        <><PanelBanner>
        <Paper elevation = {3} sx={{height:'10.7rem'}}>
        
            <Typography variant="h4" component="h3" sx={{ml:1, mt:1}}>
                Lista de Ejes
            </Typography>   
        </Paper>  
        <Card sx={{ width: 300, pt:1 }}>
            <CardMedia
                    component="img"
                    alt="eje OGI"
                    height="160"
                    image="eje.png"/>
        </Card>
    </PanelBanner></>
    );
}

const PanelBanner = styled.div`
    display:grid;
    grid-template-columns: 1fr 0fr;
    align-items:'strech';
    gap:3px;
    width:100%;
    height:10.7rem;
`
export default BannerEjes