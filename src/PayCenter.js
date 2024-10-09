
import React, { useState } from 'react';

const PaymentCenter = () => {
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentStatus, setPaymentStatus] = useState(null);

  const handlePayment = (e) => {
    e.preventDefault();
    
    if (name && cardNumber && expiryDate && cvv && amount) {
      setPaymentStatus('Payment successful!');
    } else {
      setPaymentStatus('Please fill all the fields.');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h2>Payment Center</h2>
      <form onSubmit={handlePayment}>
        <div style={{ marginBottom: '10px' }}>
          <label>Name on Card:</label>
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)} 
            placeholder="John Doe" 
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Card Number:</label>
          <input 
            type="text" 
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)} 
            placeholder="1234 5678 9101 1121" 
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Expiry Date:</label>
          <input 
            type="text" 
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)} 
            placeholder="MM/YY" 
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>CVV:</label>
          <input 
            type="text" 
            value={cvv}
            onChange={(e) => setCvv(e.target.value)} 
            placeholder="123" 
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Amount:</label>
          <input 
            type="number" 
            value={amount}
            onChange={(e) => setAmount(e.target.value)} 
            placeholder="100.00" 
            required
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px' }}>Pay Now</button>
      </form>

      {paymentStatus && (
        <div style={{ marginTop: '20px', color: paymentStatus === 'Payment successful!' ? 'green' : 'red' }}>
          {paymentStatus}
        </div>
      )}
    </div>
  );
};

export default PaymentCenter;