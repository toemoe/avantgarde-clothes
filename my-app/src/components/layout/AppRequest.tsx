import submit from '../../assets/submit.png';
import '../../App.css';
import AcceptButton from '../AcceptButton';
import AppModal from '../AppModal';
import { useState } from 'react';

export default function AppRequest() {
    const [name, SetName] = useState('');
    const [email, SetEmail] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [isAccepted, setIsAccepted] = useState(false);
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const validateForm = () => {
      let isValid = true;

      if (name.trim() === '') {
        isValid = false;
        setNameError('Please enter your name.');
      } else {
        setNameError('');
      }

      if (!emailPattern.test(email)) {
        isValid = false;
        setEmailError('Please enter a valid email address.');
      } else {
        setEmailError('');
      }

      return isValid;
    };

    const handleSubmit = () => {
      if (validateForm() && isAccepted) {
        setShowModal(true);
      } else if (!isAccepted) {
        alert('Please accept the privacy policy.');
      }
    };

    const closeModal = () => {
      setShowModal(false);
    };

    return (
      <>
        <article className="container_request" id='request'>
          <div className="request_menu">
            <div className="content_request">
              <h1 className="heading">Request Access</h1>
              <input type="text" className="request_input" name="username" placeholder="Name" value={name} onChange={(e) => SetName(e.target.value)}/>
              {nameError && <p style={{ color: 'red', fontSize: '0.9rem', marginBottom: '0.8rem' }}>{nameError}</p>}
              <input type="text" className="request_input" name="email" placeholder="E-mail" value={email} onChange={(e) => SetEmail(e.target.value)} />
              {emailError && <p style={{ color: 'red', fontSize: '0.9rem', marginBottom: '0.8rem' }}>{emailError}</p>}
              <div className="request_accept">
                <AcceptButton isAccepted={isAccepted} setIsAccepted={setIsAccepted}/>
                <p className="accept_text">I accept Privacy policy</p>
              </div>
              <button className="request_submit" onClick={handleSubmit}>SUBMIT FORM</button>
            </div>
            <img src={submit} className="submit_image" alt="submit_picture" />
          </div>
        </article>

        {showModal && <AppModal onClose={closeModal} />}
      </>
    )
}