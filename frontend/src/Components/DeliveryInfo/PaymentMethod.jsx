import React, { useState } from 'react';
import './PaymentMethod.css';


const PaymentMethod = () => {
    const [selectedMethod, setSelectedMethod] = useState('');
    
    const handleChange = (event) => {
        setSelectedMethod(event.target.value);
    };
      return (
        <div className='payment-method-container' >
            <h1>Payment Method</h1>
            <div className='payment-method'>
                <div className='payment-method-item'>
                    <label className='title' htmlFor='cod'>
                        <input type='radio' name='payment-method' value='cod' onChange={handleChange} /> Cash on Delivery
                    </label>
                </div>
                
                <div className='payment-method-item'>
                    <label className='title' htmlFor='upi'>
                        <input type='radio' name='payment-method' value='upi' onChange={handleChange} /> UPI
                    </label>
                    {selectedMethod === 'upi' && (
                        <div className="content">
                            <input className='dummy' type="text" placeholder='Enter UPI ID' />
                        </div>
                    )}
                </div>
                <div className='payment-method-item'>
                    <label className='title' htmlFor='cards'>
                        <input type='radio' name='payment-method' value='cards' onChange={handleChange} /> Credit/Debit Card
                    </label>
                    {selectedMethod === 'cards' && (
                        <div className="content">
                            <input className='dummy' type="text" placeholder='Enter Card Number' /><br />
                            <div className="multi-fields">
                                <input type="text" placeholder='CVV' required />
                                <input type="text" placeholder='Expiry' required />
                            </div>
                            <input className='dummy' type="text" placeholder='Enter Card Holder Name' /><br />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PaymentMethod;
