
import Modal from 'react-modal';
import Box from '@mui/material/Box'
import Button from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

import { FaArrowAltCircleUp,FaArrowAltCircleDown } from "react-icons/fa";



type onRequestProps={
    isOpen:boolean,
    onRequestClose:()=>void;

}

const NewModal: React.FC<onRequestProps> = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
     overlayClassName='react-modal-overlay'
    className="react-modal-content"
    >
    <Typography sx={{
        marginBottom:'10px'
    }}>
        Cadastrar Transação
    </Typography>

    <Box sx={{marginBottom:'10px'}}>
    
        <Box sx={{display:"grid",gap:'20px'}}>
            <input type="text"
            style={{
                width:'405px',
                height:'40px',
                boxSizing:"border-box"
            }}
            />
            <input 
            type="number"
            style={{
                width:'405px',
                height:'40px',
                boxSizing:"border-box"
            }}
            />
        </Box>
      
    {/* buttons */}
      <Box sx={{
        display:'flex',
        justifyContent:'center',
        gap:'20px',
        marginTop:'30px',

        
        }}>
        <Button sx={{
            display:'flex',
            borderRadius:'0',
            gap:'20px',
            alignItems:'center',
            border:'1px solid gray',
            padding:'15px'
            
            }}>
            <Typography>
            <FaArrowAltCircleUp color='green' size={15}/>
            </Typography>

            <Typography sx={{fontSize:"18px",}}>
                Entrada
            </Typography>
        </Button>

        <Button sx={{
            display:'flex',
            gap:'20px',
            alignItems:'center',
            border:'1px solid gray',
            padding:'15px',
            borderRadius:'0',
            
            }}>
            <Typography>
            <FaArrowAltCircleDown color='red' size={15}/>
            </Typography>

            <Typography sx={{fontSize:"18px"}}>
                Saida
            </Typography>
        </Button>
      </Box>

      <Box sx={{marginTop:"20px"}}>
        <input type="text" placeholder='Categoria'
            style={{
                width:'405px',
                height:'40px',
                boxSizing:"border-box",
                padding:"10px"
            }}
            />
        </Box>

        <Box sx={{
            display:'grid',
             justifyContent:'center',
             marginTop:'20px',
             border:'1px solid gray'
             
             }}>
            <Button sx={{
                fontSize:'18px',
                
            }}>
                Cadastrar
            </Button>
        </Box>
        



    </Box>

    </Modal>

    
  )
}

export default NewModal