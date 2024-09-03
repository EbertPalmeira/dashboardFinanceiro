import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { FaArrowAltCircleUp, FaArrowAltCircleDown, FaMoneyBill } from 'react-icons/fa';
import { useFinance } from '../Context';

const Summary = () => {
  const { transactions } = useFinance();
  const totalEntradas = transactions.filter(t => t.tipo === 'entrada').reduce((acc, cur) => acc + cur.valor, 0);
  const totalSaidas = transactions.filter(t => t.tipo === 'saida').reduce((acc, cur) => acc + cur.valor, 0);
  const saldo = totalEntradas - totalSaidas;

  const hasTransactions = transactions.length > 0;

  return (
    <>
    <Grid sx={{ 
      display: 'flex',
       justifyContent:'center',
        gap: '100px',
       position:"relative",
       bottom:"50px"
        
        
        
        }}>
      <Box sx={{ padding: '30px',background:'#fff'  }}>
        <Box sx={{ display: 'flex', gap: '100px', alignItems: 'center' }}>
          <Typography sx={{ fontFamily: "'Poppins',sans-serif", fontWeight: 'bold' }}>Entrada</Typography>
          <Typography><FaArrowAltCircleUp color='green' size={20} /></Typography>
        </Box>
        <Typography sx={{ 
          fontFamily: "'Poppins',sans-serif",
           fontWeight: '400',
           color:"#3CB371",
           fontSize:'1.2em',
           marginTop:'10px'
           }}>
            R$ {totalEntradas.toFixed(2)}
            </Typography>
      </Box>

      <Box sx={{ padding: '30px',background:'#fff'}}>
        <Box sx={{ display: 'flex', gap: '100px' }}>
          <Typography sx={{fontWeight:'bold'}}>Saídas</Typography>
          <Typography><FaArrowAltCircleDown color='red' size={20} /></Typography>
        </Box>
        <Typography sx={{ 
          fontFamily: "'Poppins',sans-serif",
           fontWeight: '400',
           color:'red' ,
           fontSize:'1.2em',
           marginTop:'10px'
           }}>R$ {totalSaidas.toFixed(2)}</Typography>
      </Box>

      <Box sx={{ background: '#66CDAA', padding: '30px' }}>
        <Box sx={{ display: 'flex', gap: '100px',alignItems:'center' }}>
          <Typography sx={{ 
            fontFamily: "'Poppins',sans-serif",
             fontWeight: '400',
              color: '#FFf',
              }}>
                Total
            </Typography>
          <Typography><FaMoneyBill color='white' size={20} /></Typography>
        </Box>
        <Typography sx={{ 
          fontFamily: "'Poppins',sans-serif",
           fontWeight: '400',
            color: '#fff' ,
            fontSize:'1.2em',
            marginTop:'10px'
            
            }}>
          R$ {saldo.toFixed(2)}
        </Typography>
      </Box>

      
    </Grid>
    {hasTransactions && (
       <Box sx={{
        display:'grid',
        justifyContent:"center",
        width: '100%',
        marginTop: '100px',
        overflowX: 'auto',
        marginBottom:'50px'
        
            }}>
          <Typography variant="h6" sx={{ marginBottom: '10px',textAlign:'center' }}>Histórico de Transações</Typography>
          <Box sx={{ 
            display:'grid',
            justifyContent:'center',
            textAlign:"center",
             gap: '10px',
              padding: '10px',
              borderRadius: '5px' ,
              background:"#fff",
                
                }}>
            <Box sx={{
              display: 'grid',
              padding:"10px",
              gridTemplateColumns: '300px 300px 300px ',
             }}>
            <Typography sx={{ fontWeight: 'bold' }}>Descrição</Typography>
              <Typography sx={{ fontWeight: 'bold' }}>Valor</Typography>
             <Typography sx={{ fontWeight: 'bold' }}>Tipo</Typography>
            
            
  
  
           
            {transactions.map((transaction, index) => (
                <Box  key={index}>
                  <Typography sx={{marginTop:"10px",}}>{transaction.descricao}</Typography>
                  <Typography sx={{ marginTop:"10px",color: transaction.tipo === 'entrada' ? 'green' : 'red' }}>R$ {transaction.valor.toFixed(2)}</Typography>
                  <Typography sx={{ marginTop:"10px",color: transaction.tipo === 'entrada' ? 'green' : 'red'}}>{transaction.tipo === 'entrada' ? 'Entrada' : 'Saída'}</Typography>
            
              </Box>
              
            ))}
            </Box>
              
            
            
          </Box>
        </Box>
     )}

    </>
  );
};

export default Summary;
