import React, { useState } from "react";

const ProfileManagementPage = () => {
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    orderHistory: [],
    paymentMethods: [],
    email: "",
    phoneNumber: "",
    address: {
      street: "",
      city: "",
      postcode: ""
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
  };

  const handleOrderHistoryClick = () => {
    // Implement logic to view order history
    console.log("View order history");
  };

  const handleUpdatePaymentMethods = () => {
    // Implement logic to update payment methods
    console.log("Update payment methods");
  };

  const handleUpdateDetails = () => {
    // Implement logic to update payment methods
    console.log("handleUpdateDetails");
  };

  const orderHistories = [
    {
      id: 1,
      bicycleName: "Some name 1",
      model: "Some model 1",
      orderDate: "2022-04-11",
    },
    {
      id: 2,
      bicycleName: "Some name 2",
      model: "Some model 2",
      orderDate: "2023-01-10",
    },
    {
      id: 3,
      bicycleName: "Some name 3",
      model: "Some model 3",
      orderDate: "2023-01-11",
    },
    {
      id: 4,
      bicycleName: "Some name 4",
      model: "Some model 4",
      orderDate: "2023-01-12",
    },
    // ... (continuing for id 4 to 11 with unique values)
  ];

  return (
    <div className="page-view">
      <h2>Profile Management</h2>
      <div>
        <h3>Personal Information</h3>
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          value={profile.firstName}
          onChange={handleInputChange}
          className="field-spacing"
        />
        <br />
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={profile.lastName}
          onChange={handleInputChange}
          className="field-spacing"
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={profile.email}
          onChange={handleInputChange}
          className="field-spacing"
        />
        <br />
        <input
          type="text"
          placeholder="Street Name"
          name="streetName"
          value={profile.address.street}
          onChange={handleInputChange}
          className="field-spacing"
        />
        <br />
        <input
          type="text"
          placeholder="City"
          name="city"
          value={profile.address.city}
          onChange={handleInputChange}
          className="field-spacing"
        />
        <br />
        <input
          type="text"
          placeholder="Postal Code"
          name="postcode"
          value={profile.address.postcode}
          onChange={handleInputChange}
          className="field-spacing"
        />
        <br />
        <input
          type="text"
          placeholder="Phone Number"
          name="phoneNumber"
          value={profile.phoneNumber}
          onChange={handleInputChange}
          className="field-spacing"
        />
      </div>
      <div>
        <h3>Order History</h3>
        <table>
          <thead>
            <tr>
              <th>Bicycle Name</th>
              <th>Model</th>
              <th>Order Date</th>
              <th></th> {/* Empty column */}
            </tr>
          </thead>
          <tbody>
            {orderHistories.map((order) => (
              <tr key={order.id}>
                <td>{order.bicycleName}</td>
                <td>{order.model}</td>
                <td>{order.orderDate}</td>
                <td>
                  {" "}
                  <button
                    onClick={handleOrderHistoryClick}
                    className="secondary-button"
                  >
                    View Order
                  </button>
                </td>{" "}
                {/* Empty column */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br/>
      <div>
        <button className="submit-button" onClick={handleOrderHistoryClick}>
          Update Details
        </button>
      </div>
    </div>
  );
};

export default ProfileManagementPage;
