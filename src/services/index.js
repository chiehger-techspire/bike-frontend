import axios from 'axios';

const RentalService = {
  getBicycles: async () => {
    try {
      const response = await axios.get('/api/bicycles'); // Replace with the appropriate API URL
      return response.data;
    } catch (error) {
      console.error('Error retrieving bicycles:', error);
      throw error;
    }
  },

  postOrder: async (orderData) => {
    try {
      const response = await axios.post('/api/orders', orderData); // Replace with the appropriate API URL
      return response.data;
    } catch (error) {
      console.error('Error submitting order:', error);
      throw error;
    }
  },
};

export default RentalService;
