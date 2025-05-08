import React, { useState } from "react";
import './CheckoutPage.css';
import { useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'
import PaymentRoute from "../PaymentRoute/PaymentRoute";
function CheckoutPage() {
  const [showAddModal, setShowAddModal] = useState(false);
  const { state: product } = useLocation();
  console.log(product);  // In both CheckoutPage and PaymentPage

  const [address, setAddress] = useState({
    name: "Name",
    line: "Address",
    phone: "Phone Number",
    billingSame: true,
  });

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState(address);
  const [addressExists, setAddressExists] = useState(true);
  const [newAddressData, setNewAddressData] = useState({
    pincode: "",
    name: "",
    phone: "",
    line: "",
    billingSame: false,
  });

  if (!product) {
    return <div>No product data available</div>;
  }

  // --- Sanitize and format price ---
  const cleanPrice = Number(
    product.price?.toString().replace(/[^0-9.]/g, '') || 0
  );
  const formattedPrice = cleanPrice.toLocaleString('en-IN');

  const handleEdit = () => setShowForm(true);
  const handleDelete = () => setAddressExists(false);

  const handleSave = () => {
    setAddress(formData);
    setShowForm(false);
  };

  const handleAddAddress = () => {
    setNewAddressData({
      pincode: "",
      name: "",
      phone: "",
      line: "",
      billingSame: false,
    });
    setShowAddModal(true);
  };

  return (
    <>
    <Navbar/>
    <div className="checkout-box-container">
        <div>
      <div className="shipping-card">
        <h3>Shipping Address</h3>
        {!addressExists ? (
          <button className="add-address" onClick={handleAddAddress}>Add address</button>
        ) : (
          <>
            <div className="card-header">
              <button className="add-address" onClick={handleAddAddress}>Add address</button>
            </div>
            <div className="address-content">
              <div className="radio-indicator">
                <span className="radio-dot"></span>
              </div>
              <div className="address-details">
                <strong className="name">{address.name}</strong>
                <p className="address">{address.line}</p>
                <p className="phone">{address.phone}</p>
                <div className="billing-checkbox">
                  <input
                    type="checkbox"
                    checked={address.billingSame}
                    onChange={() =>
                      setAddress((prev) => ({
                        ...prev,
                        billingSame: !prev.billingSame,
                      }))
                    }
                  />
                  <div>Billing Address same as shipping address</div>
                </div>
              </div>
              <div className="address-actions">
                <button className="edit-btn" onClick={handleEdit}>Edit</button>
                <button className="delete-btn" onClick={handleDelete}>
                  <i className="bi bi-trash3"></i>
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Edit Modal */}
      {showForm && (
        <div className="edit-modal">
          <div className="modal-content">
            <h4>Edit Address</h4>
            <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Name" />
            <input type="text" value={formData.line} onChange={(e) => setFormData({ ...formData, line: e.target.value })} placeholder="Address" />
            <input type="text" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="Phone" />
            <div className="modal-buttons">
              <button onClick={handleSave} className="edit-btn">Save</button>
              <button onClick={() => setShowForm(false)} className="delete-btn">Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Add Modal */}
      {showAddModal && (
        <div className="modal-overlay">
          <div className="shipping-modal">
            <h2>Add Shipping Address</h2>
            <label>Pincode*</label>
            <div className="input-group">
              <span className="flag">🇮🇳 IN</span>
              <input type="text" placeholder="Enter Pincode" value={newAddressData.pincode} onChange={(e) => setNewAddressData({ ...newAddressData, pincode: e.target.value })} />
            </div>
            <label>Name*</label>
            <input type="text" placeholder="Enter your full name Ex: John Petter" value={newAddressData.name} onChange={(e) => setNewAddressData({ ...newAddressData, name: e.target.value })} />
            <label>Phone Number</label>
            <div className="input-group">
              <span className="flag">🇮🇳 +91</span>
              <input type="text" placeholder="00000-00000" value={newAddressData.phone} onChange={(e) => setNewAddressData({ ...newAddressData, phone: e.target.value })} />
            </div>
            <label>Door No., Flat Number, Locality*</label>
            <input type="text" placeholder="Enter your address" value={newAddressData.line} onChange={(e) => setNewAddressData({ ...newAddressData, line: e.target.value })} />
            <label>Email</label>
            <input type="email" value="jeevasumathi1357@gmail.com" readOnly />
            <div className="checkbox-group">
              <input type="checkbox" id="default" checked={newAddressData.billingSame} onChange={(e) => setNewAddressData({ ...newAddressData, billingSame: e.target.checked })} />
              <label htmlFor="default">Make this my default address</label>
            </div>
            <div className="modal-buttons">
              <button className="cancel-btn" onClick={() => setShowAddModal(false)}>Cancel</button>
              <button className="save-btn" onClick={() => {
                setAddress({
                  name: newAddressData.name,
                  line: newAddressData.line,
                  phone: newAddressData.phone,
                  billingSame: newAddressData.billingSame,
                });
                setAddressExists(true);
                setShowAddModal(false);
              }}>Save Address</button>
            </div>
          </div>
        </div>
      )}

      {/* WhatsApp Updates */}
      <div className="whatsapp-updates">
        <div className="icon-text">
          <i className="bi bi-whatsapp"></i>
          <h5>Get updates on Whatsapp</h5>
        </div>
        <label className="switch">
          <input type="checkbox" id="toggleSwitch" />
          <span className="slider"></span>
        </label>
      </div>
    </div>
    <div>
      {/* Payment Card */}
      <div className="payment-card">
          <h2 className="payment-title">
            Payment Details <span className="item-count">(1 item)</span>
          </h2>
          <div className="payment-row">
            <span>Sub Total</span>
            <span className="amount">₹ {formattedPrice}</span>
          </div>
          <div className="divider"></div>
          <div className="payment-row">
            <span>Delivery Charge</span>
            <span className="free">FREE</span>
          </div>
          <div className="grand-total-box">
            <div className="payment-row">
              <strong>GRAND TOTAL</strong>
              <strong className="grand-amount">₹ {formattedPrice}</strong>
            </div>
          </div>
        </div>

        {/* Cart Item Preview */}
        <div className="cart-item">
          <div className="card">
            <div className="item-left">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="item-right">
              <div className="item-header">
                <h2>₹ {formattedPrice}</h2>
                <i className="bi bi-trash3"></i>
              </div>
              <p className="item-name">{product.name}</p>
              <div className="item-details">
                <span className="badge">Qty: 1</span>
                <span className="badge">Size: 18 INCHES</span>
                <span className="badge">Weight: 5.348 g</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <PaymentRoute/>
    </>
  );
}

export default CheckoutPage;
