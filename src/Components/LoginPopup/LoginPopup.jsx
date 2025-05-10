import React, { useState, useEffect } from 'react';
import './LoginPopup.css';
import { useModal } from '../ModalContext/ModalContext';
import loginimage from '../../assets/loginPopupMobile.webp';
import indiaFlag from '../../assets/in.svg';

function LoginPopup() {
  const { isLoginOpen, setIsLoginOpen } = useModal();
  const [phone, setPhone] = useState('');
  const [step, setStep] = useState(1); // Step 1: phone, 2: OTP, 3: user details
  const [otp, setOtp] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pincode, setPincode] = useState('');
  const [place, setPlace] = useState('');

  useEffect(() => {
    if (pincode.length === 6) {
      fetch(`https://api.postalpincode.in/pincode/${pincode}`)
        .then((res) => res.json())
        .then((data) => {
          if (data[0].Status === 'Success') {
            const postOffice = data[0].PostOffice[0];
            setPlace(`${postOffice.Name}, ${postOffice.District}, ${postOffice.State}`);
          } else {
            setPlace('Invalid Pincode');
          }
        });
    } else {
      setPlace('');
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

  const handleContinue = () => {
    if (phone.length === 10) {
      localStorage.setItem('phone', phone);
      setStep(2); // Show OTP step
    }
  };

  const handleVerifyOtp = () => {
    if (otp.length === 6) {
      setStep(3); // Proceed to user details
    }
  };

  const handleSubmit = () => {
    if (name && email && pincode.length === 6) {
      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
      localStorage.setItem('pincode', pincode);
      localStorage.setItem('place', place);

      // Simulated login
      const token = 'user-specific-token';
      localStorage.setItem('token', token);

      setIsLoginOpen(false);
      window.location.href = '/';
    }
  };

  if (!isLoginOpen) return null;

  return (
    <div className="login-popup-overlay">
      <div className="login-popup-container">
        <button className="login-popup-close" onClick={() => setIsLoginOpen(false)}>✕</button>
        <img src={loginimage} className="login-popup-image" alt="Login visual" />

        <div className="popup-right">
          <h1>
            {step === 1 && 'Sign in or Sign up'}
            {step === 2 && 'Enter Verification Code'}
            {step === 3 && 'Complete Your Profile'}
          </h1>

          {/* Step 1: Phone Number */}
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

          {/* Step 2: OTP */}
          {step === 2 && (
            <>
              <h4>Enter 6-digit OTP</h4>
              <input
                type="text"
                className="otp-input"
                placeholder="Enter OTP"
                value={otp}
                onChange={handleOtpChange}
                maxLength={6}
              />
              <button
                className="continue-button"
                disabled={otp.length !== 6}
                onClick={handleVerifyOtp}
              >
                Verify OTP
              </button>
            </>
          )}

          {/* Step 3: User Details */}
          {step === 3 && (
            <div className="user-details-form">
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Pincode</label>
              <input
                type="text"
                placeholder="Enter 6-digit pincode"
                value={pincode}
                onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
                maxLength={6}
              />
              {place && <p className="place-display">📍 {place}</p>}
              <button className="submit-button" onClick={handleSubmit}>Submit</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginPopup;
