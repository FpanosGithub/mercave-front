import styled from 'styled-components';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import TarjetaCirculacion from './TarjetaCirculacion';
import { ResponsiveContainer, ReferenceLine, LineChart, Line, CartesianGrid,Tooltip, Legend } from 'recharts';

function CustomTooltip({ payload, label, active }) {
    if (active) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`Pto: ${label} : ${payload[0].value} m/s`}</p>
        </div>
      );
    }
  
    return null;
  }

function GraficoVelocidad ({detalle, eje}){
    const Y = detalle.vel
    //const X = [...Array(Y.lenght).keys()];
    let data = Y.map((y, index)=> {return {'t':index,'velocidad':y}})
    return(
        <>
        <Card sx={{minWidth:400}}>
        <PanelGráfico>
          <TarjetaCirculacion
                        estado = {eje.estado}
                        velocidad = {eje.vel}/> 
          <Paper elevation = {1} sx={{minWidth:230, ml:0.5, mt:1, mb:0, mr:1}}>
            <ResponsiveContainer minWidth={250} height={160}>
              <LineChart height={160} data={data}>
                <Line type="monotone" dataKey="velocidad" stroke="#8884d8" />
                <ReferenceLine y={26.5} label="100 Km/h" stroke="red" strokeDasharray="3 3" ifOverflow="extendDomain" wrapperStyle={{ backgroundColor: '#f5f5f5'}}/>
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" vertical = {false}/>
                <Tooltip content={<CustomTooltip />}/>
              </LineChart>
            </ResponsiveContainer>
          </Paper> 
        </PanelGráfico>
        </Card>
        
        </>
    );
}

const PanelGráfico = styled.div`
        display:grid;
        grid-template-columns: 0.2fr 1fr;
        gap:3px;
        width:100%;
        height:11rem;
`

export default GraficoVelocidad