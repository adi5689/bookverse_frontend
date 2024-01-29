import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const Users = () => {
  const { loading, user } = useContext(AuthContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      if (user) {
        const db = getFirestore();
        const usersCollection = collection(db, 'users'); // Change 'users' to your actual collection name

        try {
          const querySnapshot = await getDocs(usersCollection);
          const userData = querySnapshot.docs.map((doc) => doc.data());
          setUsers(userData);
        } catch (error) {
          console.error('Error fetching users:', error);
        }
      }
    };

    fetchUsers();
  }, [user]);

  if (loading) {
    return <p>Loading users...</p>;
  }

  return (
    <div>
      <h2>Users</h2>
      <table>
        <thead>
          <tr className='text-white'>
            <th>Name</th>
            <th>Email</th>
            {/* Add more fields as needed */}
          </tr>
        </thead>
        <tbody>
          {users.map((userData) => (
            <tr key={userData.email}>
              <td>{userData.displayName}</td>
              <td>{userData.email}</td>
              {/* Display more fields as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
