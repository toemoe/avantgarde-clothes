import submit from '../../assets/submit.png';
import '../../App.css';
import AcceptButton from '../AcceptButton';

export default function AppRequest() {
    return (
        <article className="container_request">
        <div className="request_menu">
          <div className="content_request">
            <h1 className="heading">Request Access</h1>
            <input type="text" className="request_input" name="username" placeholder="Name" />
            <input type="text" className="request_input" name="email" placeholder="E-mail" />
            <div className="request_accept">
              <AcceptButton />
              <p className="accept_text">I accept Privacy policy</p>
            </div>
            <button className="request_submit">SUBMIT FORM</button>
          </div>
          <img src={submit} className="submit_image" alt="submit_picture" />
        </div>
      </article>
    )
}