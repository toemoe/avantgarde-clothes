import '../../App.css';
import inst from '../../assets/instagram.svg';
import fb from '../../assets/facebook.svg';
import yt from '../../assets/youtube.svg';
import tg from '../../assets/telegram.svg';
export default function AppFooter() {
    return (
        <>
        <div className="pre-end">
        <button className="pre-end_content">CONSECTETUR</button>
        <button className="pre-end_content">DISTILLED IDENTITY</button>
        <button className="pre-end_content">CURATED SILENCE</button>
      </div>

      <div className="ending">
        <div className="ending_menu">
          <h2 className="h2">CLOTHES</h2>
          <div className="buttons">
            <button onClick={() => window.open('https://www.instagram.com', '_blank')} className="ending_inst">
                <img src={inst} alt="inst" className='SocialPic'/>
            </button>
            <button onClick={() => window.open('https://www.facebook.com', '_blank')} className="ending_fb">
                <img src={fb} alt="facebook" className='SocialPic'/>
            </button>
            <button onClick={() => window.open('https://www.youtube.com', '_blank')} className="ending_yt">
                <img src={yt} alt="youtube" className='SocialPic'/>
            </button>
            <button onClick={() => window.open('https://web.telegram.org', '_blank')} className="ending_tg">
                <img src={tg} alt="telegram" className='SocialPic' />
            </button>
          </div>
        </div>
        <div className="terms">
          <button className="ending_content">© 2025, Copyright.</button>
          <button className="ending_content">Privacy policy</button>
          <button className="ending_content">Terms of Use</button>
        </div>
      </div>
      </>
    )
}