import React from 'react'
import './contactus.css'

const Contactus = () => {
  return (
    <div>
        <div className="contact-container">
            <h1>Contact With Us</h1>
            <p>Welcome to ShopEase - your one-stop destination for premium men's fashion.<br/> Explore a curated collection of stylish and comfortable clothing designed exclusively for men.</p>
            <div className="contact-box">
                <div className="contact-left">
                    <h3>Send your request</h3>
                    <form action="">
                        <div className="input-row">
                            <div className="input-group">
                                <label>Name</label>
                                <input type="text" placeholder='John Doe' />
                            </div>
                        </div>
                        <div className="input-row">
                            <div className="input-group">
                                <label>Phone</label>
                                <input type="text" placeholder='+ 11 2223333344' />
                            </div>
                        </div>
                        <div className="input-row">
                            <div className="input-group">
                                <label>Email</label>
                                <input type="email" placeholder='abc@gmail.com' />
                            </div>
                        </div>
                        <div className="input-row">
                            <div className="input-group">
                                <label>Subject</label>
                                <input type="text" placeholder='Product Demo' />
                            </div>
                        </div>
                        <label >Message</label>
                        <textarea rows="5" placeholder='Type your message here'></textarea>
                        <button type='submit'>Send</button>
                    </form>
                </div>
                <div className="contact-right">
                    <h3>Reach Us</h3>

                    <table>
                        <tr>
                            <td>Email</td>
                            <td>contactus@example.com</td>
                        </tr>
                        <tr>
                            <td>Phone</td>
                            <td>+91 123456789</td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>123, ABC Street <br /> XYZ City <br /> PIN: 123456</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contactus