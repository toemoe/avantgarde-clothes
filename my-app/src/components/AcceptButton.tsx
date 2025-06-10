export default function AcceptButton() {
    const acceptClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.currentTarget.classList.toggle('clicked');
    };

    return (
        <button className="request_btn" onClick={acceptClick}></button>
    )
}