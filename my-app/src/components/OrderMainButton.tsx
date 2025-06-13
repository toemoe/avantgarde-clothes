export default function OrderButton() {
    const handleScroll = () => {
        const element = document.getElementById('request');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <button className="shop_button" onClick={handleScroll}>ORDER</button>
    );
}