import axios from "axios";

const BASE_URL = "https://foodapp.dynamiteaccessories.pk/APIs";

export const fetchRestaurants = async () => {
   try {
      const response = await axios.get(`${BASE_URL}/get_restaurants.php`);
      return response.data;
   } catch (error) {
      console.error("Error fetching restaurants:", error);
      throw error;
   }
};

export const fetchUsers = async () => {
   try {
      const response = await axios.get(`${BASE_URL}/get_users.php`);
      return response.data;
   } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
   }
};

export const fetchMenuItems = async () => {
   try {
      const response = await axios.get(`${BASE_URL}/get_menuitems.php`);
      return response.data;
   } catch (error) {
      console.error("Error fetching menu items:", error);
      throw error;
   }
};

export const insertRestaurant = async (body) => {
   //  console.log("Bopdy: ", body);
   try {
      const response = await axios.post(
         `${BASE_URL}/insert_restaurants.php`,
         body
      );
      return response.data;
   } catch (error) {
      console.error("Error insert restaurant:", error);
      throw error;
   }
};
export const insertUser = async (body) => {
   console.log("Bopdy: ", body);
   try {
      const response = await axios.post(`${BASE_URL}/insert_users.php`, body);
      return response.data;
   } catch (error) {
      console.error("Error insert User :", error);
      throw error;
   }
};
export const insertMenu = async (body) => {
   console.log("Bopdy: ", body);
   try {
      const response = await axios.post(
         `${BASE_URL}/insert_menuitems.php`,
         body
      );
      return response.data;
   } catch (error) {
      console.error("Error insert User :", error);
      throw error;
   }
};
