import { Box, Button } from '@mui/material'
import NewModal from '../Modal/index'
import { useState } from 'react';
const Home = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <Box sx={{
        paddingTop:'50px',
        display:'flex',
        justifyContent:'space-around',



    }}>
        <Box>DX Money</Box>

        <Box>
          <Button type='button' onClick={openModal}
          sx={{
              background:'blue',
              color:"#FFF",
              padding:'10px 20px'
          }}>
            Nova transação
          </Button>
          <NewModal isOpen={modalIsOpen} onRequestClose={closeModal} />

        </Box>
    </Box>
  )
}

export default Home