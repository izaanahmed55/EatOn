import axios from 'axios';

const BASE_URL = 'https://foodapp.dynamiteaccessories.pk/APIs';

export const fetchRestaurants = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/get_restaurants.php`);
    return response.data; 
  } catch (error) {
    console.error('Error fetching restaurants:', error);
    throw error; 
  }
};

export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/get_users.php`);
    return response.data; 
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error; 
  }
};

export const fetchMenuItems = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/get_menuitems.php`);
    return response.data; 
  } catch (error) {
    console.error('Error fetching menu items:', error);
    throw error; 
  }
};
