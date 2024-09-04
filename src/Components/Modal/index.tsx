import React, { useState } from 'react';
import Modal from 'react-modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FaArrowAltCircleUp, FaArrowAltCircleDown } from 'react-icons/fa';
import { useFinance } from '../Context';


interface OnRequestProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const NewModal: React.FC<OnRequestProps> = ({ isOpen, onRequestClose }) => {
  const { addTransaction } = useFinance();
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState<string | number>('');
  const [tipo, setTipo] = useState<'entrada' | 'saida' | null>(null);

  const handleAddTransaction = () => {
    if(tipo === null || descricao === '' || valor === '' || Number(valor) === 0 ){
      alert('Informe todos os dados');
      return;
    }
    if (tipo) {
      addTransaction({ descricao, valor: Number(valor), tipo });
      onRequestClose(); 
    }
    setDescricao('');
    setValor(''); 
    setTipo(null);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <Typography sx={{ fontWeight:'bold', marginBottom: '10px',textAlign:'center' }}>Cadastrar Transação</Typography>
      <Box sx={{ marginBottom: '10px' }}>
        <Box sx={{ display: 'grid', gap: '20px' }}>
          <input
            type='text'
            placeholder='Informe a descrição'
            style={{ width: '405px', height: '40px', boxSizing: 'border-box' }}
            value={descricao}
            required
            onChange={(e) => setDescricao(e.target.value)}
          />
          <input
            type='number'
            placeholder='Informe o valor'
            style={{ color:'#000', width: '405px', height: '40px', boxSizing: 'border-box' }}
            value={valor}
            required
            onChange={(e) => setValor(e.target.value)}
          />
        </Box>

        {/* Botões */}
        <Box sx={{ 
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            marginTop: '40px',
             
             }}>
          <Button
            sx={{ display: 'flex',
               borderRadius: '0',
                gap: '20px',
                height:'50px',
                width:'150px',
                alignItems: 'center',
                background:tipo === 'entrada'? 'green': '#fff',
                border:tipo === 'entrada'? '2px solid green':'2px solid #DCDCDC',
                color:tipo === 'entrada'? '#DCDCDC':' green'
                  
                  }}
            onClick={() => setTipo('entrada')}
          >
            <Typography>
              <FaArrowAltCircleUp color={tipo==='entrada'?'#fff':'green'} size={15} />
            </Typography>
            <Typography sx={{ fontSize: '18px' }}>Entrada</Typography>
          </Button>

          <Button
            sx={{ 
              display: 'flex',
               gap: '20px',
                alignItems: 'center',
                height:'50px',
                width:'150px',
                borderRadius: '0',
                background:tipo === 'saida'? 'red': '#fff',
                border:tipo === 'saida'? '2px solid red':'2px solid #DCDCDC',
                color:tipo === 'saida'? '#DCDCDC':' red'
              
              }}
            onClick={() => setTipo('saida')}
          >
            <Typography>
              <FaArrowAltCircleDown color={tipo==='saida'?'#fff':'red'} size={15} />
            </Typography>
            <Typography sx={{ fontSize: '18px' }}>Saída</Typography>
          </Button>
        </Box>
              <Box sx={{
                display:"flex",
              justifyContent:"center",
              textAlign:'center'
              }}>
                  <Button sx={{           
                    fontSize: '18px',
                    borderRadius: '0',
                    marginTop:'50px',
                    border:'2px solid green',
                    background:'green',
                    color :"#FFF"
                }} 
                onClick={handleAddTransaction}>
                Cadastrar
              </Button>
              </Box>
          
        
      </Box>
    </Modal>
  );
};

export default NewModal;
