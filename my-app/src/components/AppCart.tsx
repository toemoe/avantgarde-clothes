import '../App.css';
import React from 'react';

type AppModalProps = {
    title: string;
    onClose: () => void;
}

export default function AppCart({ title, onClose }: AppModalProps) {
    const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if ((event.target as HTMLElement).classList.contains('overlay')) {
            onClose();
        }
    };

    return (
        <div className="overlay" onClick={handleOverlayClick}>
            <div className="modal">
                <h2 style={{ marginBottom: '1rem'}}>{title}</h2>
                <p>Please entry for {title}</p>
            </div>
        </div>
    )
}