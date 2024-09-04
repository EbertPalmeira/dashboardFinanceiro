import React, { createContext, ReactNode, useContext, useState } from 'react';

interface Transaction {
  descricao: string;
  valor: number;
  tipo: 'entrada' | 'saida';
}

interface FinanceContextData {
  transactions: Transaction[];
  addTransaction: (transaction: Transaction) => void;
}

interface FinanceProviderProps {
  children: ReactNode;
}

const FinanceContext = createContext<FinanceContextData | undefined>(undefined);

export const FinanceProvider: React.FC<FinanceProviderProps> = ({ children }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const addTransaction = (transaction: Transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <FinanceContext.Provider value={{ transactions, addTransaction }}>
      {children}
    </FinanceContext.Provider>
  );
};

export const useFinance = () => {
  const context = useContext(FinanceContext);
  if (!context) {
    throw new Error('useFinance must be used within a FinanceProvider');
  }
  return context;
};
