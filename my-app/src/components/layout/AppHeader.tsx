import '../../App.css';
import AppCart from '../AppCart';
import { useState } from 'react';

export default function AppHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');

    const handleScroll = () => {
      const elem = document.getElementById('top');
      elem?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleOpenModal = (title: string) => {
      setModalTitle(title);
      setIsModalOpen(true);
    };

    const handleCloseModal = () => {
      setIsModalOpen(false);
      setModalTitle('');
    };

    return (
      <>
        <div className="header">
          <button className="btn_mobile">ALL</button>
          <button className="main_btn" onClick={handleScroll}>CLOTHES</button>
          <button className="btn" onClick={() => handleOpenModal("SHOP")}>SHOP</button>
          <button className="btn" onClick={() => handleOpenModal("ACCOUNT")}>ACCOUNT</button>
          <button className="btn" onClick={() => handleOpenModal("CART")}>CART</button>
          <button className="btn" onClick={() => handleOpenModal("ARCHIVE")}>ARCHIVE</button>
        </div>
        {isModalOpen && (
          <AppCart title={modalTitle} onClose={handleCloseModal} />
          )}
      </>
    );
}