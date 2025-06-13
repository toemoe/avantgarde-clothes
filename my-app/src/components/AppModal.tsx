import '../App.css';
import React from 'react';

type AppModalProps = {
    onClose: () => void;
}

export default function AppModal({ onClose }: AppModalProps) {
    const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if ((event.target as HTMLElement).classList.contains('overlay')) {
            onClose();
        }
    };
    
    return (
        <div className='overlay' onClick={handleOverlayClick}>
            <div className="modal">
                <p className="modal_text">Your request is accepted!</p>
                <p className="modal_text">We will contact you as soon as possible.</p>
                <button className="modal_button" onClick={onClose}>OK</button>
            </div>
        </div>
    )
}
