"use client";

import React, { createContext, useContext, useState } from "react";

interface ModalContextType {
  isRegisterOpen: boolean;
  openRegister: () => void;
  closeRegister: () => void;
  /** The local fly-over film, shown in its own lightbox. */
  isFlyoverOpen: boolean;
  openFlyover: () => void;
  closeFlyover: () => void;
}

const ModalContext = createContext<ModalContextType>({
  isRegisterOpen: false,
  openRegister: () => {},
  closeRegister: () => {},
  isFlyoverOpen: false,
  openFlyover: () => {},
  closeFlyover: () => {},
});

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isFlyoverOpen, setIsFlyoverOpen] = useState(false);

  const openRegister = () => setIsRegisterOpen(true);
  const closeRegister = () => setIsRegisterOpen(false);
  const openFlyover = () => setIsFlyoverOpen(true);
  const closeFlyover = () => setIsFlyoverOpen(false);

  return (
    <ModalContext.Provider
      value={{ isRegisterOpen, openRegister, closeRegister, isFlyoverOpen, openFlyover, closeFlyover }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}
