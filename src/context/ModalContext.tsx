"use client";

import React, { createContext, useContext, useState } from "react";

interface ModalContextType {
  isRegisterOpen: boolean;
  openRegister: () => void;
  closeRegister: () => void;
}

const ModalContext = createContext<ModalContextType>({
  isRegisterOpen: false,
  openRegister: () => {},
  closeRegister: () => {},
});

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const openRegister = () => setIsRegisterOpen(true);
  const closeRegister = () => setIsRegisterOpen(false);

  return (
    <ModalContext.Provider value={{ isRegisterOpen, openRegister, closeRegister }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}
