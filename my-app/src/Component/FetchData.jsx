import React,{useEffect,useState} from 'react'
import axios from 'axios'
import EditUser from './EditUser';
const FetchData = () => {
    const [Data, setData] = useState([]);
    const [editUser, setEditUser] = useState(null);
    useEffect(() => {
        fetchData();
      }, []);
    
      const fetchData = () => {
        axios
          .get('https://dummyjson.com/users')
          .then((res) => setData(res.data.users))
          .catch((err) => console.log(err));
      };
      const handleEdit = (user) => {
        setEditUser(user);
      };
    
      const handleSave = (updatedUser) => {
        axios
          .put(`https://dummyjson.com/users/${updatedUser.id}`, updatedUser)
          .then((response) => {
            console.log('User successfully updated:', updatedUser);
            fetchData(); // Fetch updated data after editing a user
            setEditUser(null); // Close the edit form
          })
          .catch((error) => {
            console.error('Error updating user:', error);
          });
      };
      const handleCancel = () => {
        setEditUser(null);
      };    
    const deleteUser = (userId) => {
        axios
          .delete(`https://dummyjson.com/users/${userId}`)
          .then((response) => {
            console.log('User successfully deleted:', userId);
            fetchData(); // Fetch updated data after deleting a user
          })
          .catch((error) => {
            console.error('Error deleting user:', error);
          });
      };
  return (
    <div>
      <h1>Customer List</h1>
      {editUser && (
        <EditUser
          user={editUser}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      )}
      <table className='table'>
        <thead>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Phone</th>
            <th>EyeColor</th>
            <th>Edit</th>
            <th>Delete</th>
        </thead>
        <tbody>
            {
                
            Data.map((user,index)=>{
                return <tr key ={index}>
                    <td>{user.firstName}{user.lastName}</td>
                    <td>{user.age}</td>
                    <td>{user.gender}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.eyeColor}</td>
                    <td>
                <button onClick={() => handleEdit(user)}>Edit</button>
              </td>
                    <td>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
              </td> </tr>
            })
            }
        </tbody>
      </table>
     
    </div>
  )
}

export default FetchData
