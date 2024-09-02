import { Grid,Box, Typography } from '@mui/material'

import { FaArrowAltCircleUp,FaArrowAltCircleDown,FaMoneyBill } from "react-icons/fa";
const Summary= () => {
  return (
    <Grid sx={{
      display:'flex',
      justifyContent:'center',
      marginTop:'70px',
      gap:'100px',
  
    }}>

      <Box sx={{padding:"20px"}}>
        <Box sx={{
          display:'flex',
          gap:"100px",
          alignItems:"center"
          }}>
          <Typography sx={{
            fontFamily:"'Poppins',sans-serif",
            fontWeight:'400'
            }}>
            Entrada
          </Typography>

          <Typography >
          <FaArrowAltCircleUp color='green' size={20}/>
          </Typography>
        </Box>

          {/* valor */}
          <Typography sx={{
            fontFamily:"'Poppins',sans-serif",
            fontWeight:'400'
            }}>
            R$ 10.000,00
          </Typography>
      </Box>

      <Box sx={{padding:'20px'}}>
        <Box sx={{
            display:'flex',
            gap:"100px"
            }}>
            <Typography>
            Saidas
            </Typography>

            <Typography >
            <FaArrowAltCircleDown color='red' size={20}/>
            </Typography>
          </Box>
          {/* valor */}
          <Typography sx={{
            fontFamily:"'Poppins',sans-serif",
            fontWeight:'400'
            }}>
            R$ 6.000,00
          </Typography>
      </Box>

      <Box sx={{background:'	#2F4F4F',padding:'20px'}}>
        <Box sx={{
              display:'flex',
              gap:"100px",
              
              
              }}>
              <Typography sx={{
                fontFamily:"'Poppins',sans-serif",
                fontWeight:'400',
                color:"#FFf"
              }}>
                Total
              </Typography>

              <Typography >
              <FaMoneyBill color='white' size={20}/>
              </Typography>
            </Box>
            {/* valor */}
            <Typography sx={{
            fontFamily:"'Poppins',sans-serif",
            fontWeight:'400',
            color:'#fff'
            }}>
            R$ 4.000,00
          </Typography>
      </Box>
    </Grid>
  )
}

export default Summary