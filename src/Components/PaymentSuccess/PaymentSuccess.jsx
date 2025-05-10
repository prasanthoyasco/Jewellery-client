import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import './PaymentSuccess.css';

function PaymentSuccess() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="payment-success-container">
      {/* Confetti runs forever */}
      <Confetti width={windowSize.width} height={windowSize.height} recycle={true} numberOfPieces={300} />
      
      <div className="success-card">
        <h1>🎉 Payment Successful!</h1>
        <p>Your transaction was completed successfully.</p>
        <button onClick={() => window.location.href = '/'}>Go to Home</button>
      </div>
    </div>
  );
}

export default PaymentSuccess;
