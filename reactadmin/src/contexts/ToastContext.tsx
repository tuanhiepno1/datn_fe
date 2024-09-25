import React, { createContext, useState, useContext, ReactNode } from "react";

export type ToastType = 'success' | 'warning' | 'error' | null;

interface ToastContextType {
  message: string,
  type: ToastType,
  setMessage: (message: string, type?: ToastType) => void, 
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

interface ToastProviderProps {
  children: ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [message, setToastMessage] = useState<string>('');
  const [type, setType] = useState<ToastType>(null);

  const setMessage = (message: string, type: ToastType = null) => {
    console.log(type);
    setToastMessage(message);
    setType(type);
  }

  return (
    <ToastContext.Provider value={{ message, type, setMessage }}>
      {children}
    </ToastContext.Provider>
  );
}

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('ToastContext chưa được cung cấp!');
  }
  return context;
};
