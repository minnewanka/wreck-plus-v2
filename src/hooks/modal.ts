import React from "react";

const useModal = (defaultValue: boolean) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(defaultValue);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return { isOpen, openModal, closeModal };
};

export default useModal;
