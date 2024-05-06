import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import { fetchUsers } from '../api/api.js';

const ViewUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers()
      .then(users => {
        setUsers(users);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {users.map(user => (
          <View key={user.user_id} style={styles.card}>
            <Text style={styles.username}>Username: {user.username}</Text>
            <Text>Email: {user.email}</Text>
            <Text>Phone Number: {user.phone_number}</Text>
            <Text>User Type: {user.user_type}</Text>
          </View>
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: '#fff',
    marginBottom: 16,
    borderRadius: 8,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    padding: 16,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default ViewUser;
