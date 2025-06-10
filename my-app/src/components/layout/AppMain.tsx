import back1 from '../../assets/back1.jpg';
import back2 from '../../assets/back2.jpeg';
import back5 from '../../assets/back5.png';
import '../../App.css';

export default function AppMain() {
    return (
        <>
        <div className="container_face">
        <div className="content">
          <h1 className="h1">AVANT-GARDE CLOTHING</h1>
          <ul>
            <li>Private Entry Only</li>
            <li>We don't Sell. We Admit</li>
          </ul>
          <button className="shop_button">ORDER</button>
        </div>
        <img src={back1} alt="front" className="front_image" />
      </div>

      <div className="container_success">
        <img src={back5} alt="front" className="success_image1" />
        <div className="content_success">
          <ul className="success_list">
            <li>We do not follow trends; we dissolve them, sculpting form into meaning.</li>
            <li>Our collection is curated with the precision of a museum exhibit. Every garment is an intentional act—no compromise, no coincidence.</li>
            <li>Identity is not branded—it is embodied. The silhouette speaks louder than any name ever could.</li>
            <li>Nearly every piece is produced as a unique edition or in an ultra-limited run. This is fashion for collectors, not consumers.</li>
          </ul>
          <button className="shop_button_success">ORDER</button>
        </div>
        <img src={back2} alt="front" className="success_image2" />
      </div>
      </>
    )
}