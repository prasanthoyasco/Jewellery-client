import React from "react";
import "./Payments.css";
import upi from "../../assets/upi.png";
import paytm from "../../assets/paytm.png";
import phonepe from "../../assets/phonepe.png";
import packing from "../../assets/packing.jpg";
function Payments() {
  return (
    <div className="payment-deliver">
      <div className="payment-section">
        <div className="paytext">
          <h1>Payments</h1>
          <p>
            Payments cards accepted.VISA,Master Card,Cashless Payments are
            posible
          </p>
        </div>
        <div className="payment-image">
          <img src={upi} />
          <img src={paytm} />
          <img src={phonepe} />
        </div>
      </div>

      <div className="deliver-section">
        <div className="toptext">
          <h1>Delivery</h1>
          <p>
            Various delivery options are available free pick-up,we carefully
            check and pack each product before shopping
          </p>
        </div>
        <p className="del-btm-text">We send wholesale product only via transport companines</p>
      </div>

      <div className="packing-section">
        <img src={packing} style={{ height: "300px" }} />
      </div>
    </div>
  );
}

export default Payments;
