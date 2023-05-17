import React, { useState } from 'react';

const BikeRentalForm = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [paymentOptions, setPaymentOptions] = useState('');
  const [identificationNumber, setIdentificationNumber] = useState('');
  const [bicycleName, setBicycleName] = useState('');
  const [bicycleModel, setBicycleModel] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can access the form data using the state variables
    console.log({
      name,
      surname,
      email,
      paymentOptions,
      identificationNumber,
      bicycleName,
      bicycleModel,
    });
    // Clear the form after submission
    setName('');
    setSurname('');
    setEmail('');
    setPaymentOptions('');
    setIdentificationNumber('');
    setBicycleName('');
    setBicycleModel('');
  };

  return (
    <div>
      <h2>Bicycle Rental Order Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="surname">Surname:</label>
          <input
            type="text"
            id="surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="paymentOptions">Payment Options:</label>
          <select
            id="paymentOptions"
            value={paymentOptions}
            onChange={(e) => setPaymentOptions(e.target.value)}
            required
          >
            <option value="">Select payment option</option>
            <option value="Credit Card">Credit Card</option>
            <option value="PayPal">PayPal</option>
            <option value="Cash">Cash</option>
          </select>
        </div>
        <div>
          <label htmlFor="identificationNumber">Identification Number:</label>
          <input
            type="text"
            id="identificationNumber"
            value={identificationNumber}
            onChange={(e) => setIdentificationNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="bicycleName">Bicycle Name:</label>
          <input
            type="text"
            id="bicycleName"
            value={bicycleName}
            onChange={(e) => setBicycleName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="bicycleModel">Bicycle Model:</label>
          <input
            type="text"
            id="bicycleModel"
            value={bicycleModel}
            onChange={(e) => setBicycleModel(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BikeRentalForm;
