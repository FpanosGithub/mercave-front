import styled from 'styled-components';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import { ResponsiveContainer, YAxis, ReferenceLine, LineChart, Line, CartesianGrid,Tooltip, Legend } from 'recharts';
import TarjetaTemperatura from './TarjetaTemperatura';

function CustomTooltip({ payload, label, active }) {
    if (active) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`Rueda A: ${payload[0].value}º / Rueda B: ${payload[1].value}º`}</p>
        </div>
      );
    }
  
    return null;
  }

function GraficoTemperaturas ({detalle, eje}){

    const Ya = detalle.tempa
    const Yb = detalle.tempb

    let data = Ya.map((y, i)=> {return {'p':i,'Rueda_A':y, 'Rueda_B':Yb[i]}})
    console.log(data);

    return(
        <>
          <Card sx={{minWidth:510}}>
          <PanelGráfico>
          <TarjetaTemperatura
                        tempa = {eje.tempa}
                        tempb = {eje.tempb}/>
            <Paper elevation = {1} sx={{minWidth:430, ml:0.5, mt:1, mb:0, mr:1}}> 
                <ResponsiveContainer minWidth={350}>
                  <LineChart width={350} data={data}
                    margin={{ top: 10, right: 30, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical = {false}/>
                    <Tooltip content={<CustomTooltip />}/>
                    <Legend width={200} wrapperStyle={{ top: 130, right: 60, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '30px' }} />
                    <Line type="monotone" dataKey="Rueda_A" stroke="#8884d8" />
                    <Line type="monotone" dataKey="Rueda_B" stroke="#82ca9d" />
                    <ReferenceLine y={50} label="50º" stroke="red" strokeDasharray="3 3" ifOverflow="extendDomain"/>
                    <ReferenceLine y={-10} label="-10º" stroke="blue" strokeDasharray="3 3" ifOverflow="extendDomain"/>
                    <YAxis/>
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

export default GraficoTemperaturas