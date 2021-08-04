import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import "./App.css";

function App() {
  const publicKey = ""; // Add your public key here

  const userInitialState = {
    name: "",
    email: "",
    phone: "",
    amount: null,
  };

  const [user, setUser] = useState(userInitialState);

  const { name, email, phone, amount } = user;

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      alert("Thanks for doing business with us! Hope you'll come back soon!!"),
    onClose: () => alert("Wait! Please don't go yet try again !!!!"),
  };

  function handleChange(event) {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div className="app">
      <header className="container">
        <div className="item">
          <img
            className="item-image"
            src="https://m.media-amazon.com/images/I/61e0pWoeGAL._SL1000_.jpg"
            alt=""
          />
          <div className="item-details">
            <p className="item-details__amount">NGN: {amount/100}</p>
          </div>
        </div>
        <div className="checkout">
          <form className="checkout-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="amount">Amount</label>
              <input
                type="number"
                id="amount"
                name="amount"
                className="form-control"
                onChange={handleChange}
              />
            </div>
          </form>
            <PaystackButton className="pay_stack-button mx-2" {...componentProps} />
        </div>
      </header>
      <p className="text-center">{user && JSON.stringify(user, null, 2)}</p>
    </div>
  );
}

export default App;
