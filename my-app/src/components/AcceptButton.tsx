import { Dispatch, SetStateAction } from "react";

interface AcceptButtonProps {
    isAccepted: boolean;
    setIsAccepted: Dispatch<SetStateAction<boolean>>;
}

export default function AcceptButton({ isAccepted, setIsAccepted }: AcceptButtonProps) {
    const acceptClick = () => {
        setIsAccepted(!isAccepted);
    }

    return (
        <button className={`request_btn ${isAccepted ? 'clicked' : ''}`} onClick={acceptClick}></button>
    )
}