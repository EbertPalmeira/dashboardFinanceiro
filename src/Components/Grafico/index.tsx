
import { DotProps } from 'recharts';
import { Grid, Box, Typography } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Dot } from 'recharts';
import { useFinance } from '../Context';

const Summary = () => {
  const { transactions } = useFinance();
  const hasTransactions = transactions.length > 0;
  const data = transactions.map((t) => ({
    name: t.descricao,
    valor: t.valor,
    tipo: t.tipo,
  }));

  // Função para renderizar os pontos personalizados
  const renderCustomDot = (props: DotProps & { payload: { tipo: 'entrada' | 'saida' } }) => {
    const { cx, cy, payload } = props;
    const fillColor = payload.tipo === 'entrada' ? 'green' : 'red';
    
    return (
      <Dot cx={cx} cy={cy} r={8} fill={fillColor} />
    );
  };

  return (
    <>
    {hasTransactions && (
        <Grid sx={{ display: 'flex', justifyContent: 'center', marginTop: '70px', gap: '100px',paddingBottom:'50px'}}>
       
        <Box sx={{ marginTop: '50px', width: '90%', height: 300 }}>
          <Typography variant="h6" sx={{ marginBottom: '20px', textAlign: 'center' }}>Gráfico de Transações</Typography>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="valor" 
                stroke="#8884d8" 
                activeDot={{ r: 8 }} 
                dot={renderCustomDot} 
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </Grid>
    )}
      
    </>
  );
};

export default Summary;
