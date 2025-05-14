import React, { useState, useEffect } from 'react';
import './LoginPopup.css';
import { useModal } from '../ModalContext/ModalContext';
import loginimage from '../../assets/loginPopupMobile.webp';
import indiaFlag from '../../assets/in.svg';
import { useNavigate } from 'react-router-dom';
import { requestOtp, verifyOtp, postUserDetails } from '../../api/productApi';

function LoginPopup() {
  const { isLoginOpen, setIsLoginOpen } = useModal();
  const [phone, setPhone] = useState('');
  const [step, setStep] = useState(1); // Step 1: phone, 2: OTP, 3: user details
  const [otp, setOtp] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pincode, setPincode] = useState('');
  const [address, setAddress] = useState('');
  const [sessionId, setSessionId] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (pincode.length === 6) {
      fetch(`https://api.postalpincode.in/pincode/${pincode}`)
        .then((res) => res.json())
        .then((data) => {
          if (data[0].Status === 'Success') {
            const postOffice = data[0].PostOffice[0];
            setAddress(`${postOffice.Name}, ${postOffice.District}, ${postOffice.State}`);
          } else {
            setAddress('Invalid Pincode');
          }
        });
    } else {
      setAddress('');
    }
  }, [pincode]);

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    setPhone(value);
  };

  const handleOtpChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    setOtp(value);
  };

  const handleContinue = async () => {
    if (phone.length === 10) {
      try {
        const res = await requestOtp(phone);
        setSessionId(res.data.sessionId);  // Store session ID
        setStep(2);
      } catch (error) {
        console.error('Failed to send OTP', error);
        alert('Failed to send OTP. Try again.');
      }
    }
  };

  const handleVerifyOtp = async () => {
    if (otp.length === 4 && sessionId) {
      try {
        const res = await verifyOtp({ sessionId, otp, phone });
        const token = res.data.token;
        localStorage.setItem('token', token);
  
        if (res.data.user && res.data.user.name) {
          localStorage.setItem('user', JSON.stringify(res.data.user));
          setIsLoginOpen(false);
          navigate('/');
        } else {
          setStep(3);
        }
      } catch (error) {
        console.error('OTP verification failed', error);
        alert('Invalid OTP. Please try again.');
      }
    }
  };
  
  

  const handleSubmit = async () => {
    if (name && email && pincode.length === 6 && address && address !== 'Invalid Pincode') {
      try {
        const res = await postUserDetails({ phone, name, email, pincode, address });
        localStorage.setItem('user', JSON.stringify(res.data.user));
        setIsLoginOpen(false);
        navigate('/');
      } catch (error) {
        console.error('User detail submission failed', error);
        alert('Failed to complete registration. Please try again.');
      }
    } else {
      alert('Please wait until address is fetched or correct the pincode.');
    }
  };
  

  if (!isLoginOpen) return null;

  return (
    <div className="login-popup-overlay">
      <div className="login-popup-container">
        <button className="login-popup-close" onClick={() => setIsLoginOpen(false)}>✕</button>
        <img src={loginimage} className="login-popup-image" alt="Login visual" />

        <div className="popup-right">
          <h1>{step === 1 ? 'Sign in or Sign up' : step === 2 ? 'Enter Verification Code' : 'Complete Your Profile'}</h1>

          {step === 1 && (
            <>
              <h4>Phone Number</h4>
              <div className="login-phone-section">
                <button>
                  <img src={indiaFlag} alt="India Flag" />
                  (+91)
                  <i className="bi bi-chevron-down"></i>
                </button>
                <input
                  type="text"
                  className="number-input-box"
                  placeholder="Enter 10-digit phone number"
                  value={phone}
                  onChange={handlePhoneChange}
                  maxLength={10}
                />
              </div>
              <p className="terms-text">
                By continuing, I agree to <a href="#">Terms of use</a> and <a href="#">Privacy Policy</a>
              </p>
              {phone.length === 10 && (
                <button className="continue-button" onClick={handleContinue}>Continue</button>
              )}
            </>
          )}

          {step === 2 && (
            <>
              <h4>Enter 6-digit OTP</h4>
              <input
                type="text"
                className="otp-input"
                placeholder="Enter OTP"
                value={otp}
                onChange={handleOtpChange}
                maxLength={4}
              />
              <button className="continue-button" disabled={otp.length !== 4} onClick={handleVerifyOtp}>
                Verify OTP
              </button>
            </>
          )}

          {step === 3 && (
            <div className="user-details-form">
              <label>Name</label>
              <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
              <label>Email</label>
              <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <label>Pincode</label>
              <input type="text" placeholder="Enter 6-digit pincode" value={pincode} onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))} maxLength={6} />
              {address && <p className="place-display">📍 {address}</p>}
              <button className="submit-button" onClick={handleSubmit} disabled={!address || address === 'Invalid Pincode'}>
                Submit
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginPopup;
