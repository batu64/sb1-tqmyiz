import React, { useState } from 'react'

interface User {
  id: number
  username: string
  email: string
  role: string
}

const UserManagement: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    { id: 1, username: 'admin', email: 'admin@example.com', role: 'Admin' },
    { id: 2, username: 'user1', email: 'user1@example.com', role: 'User' },
  ])
  const [newUser, setNewUser] = useState({ username: '', email: '', role: 'User' })
  const [editingUser, setEditingUser] = useState<User | null>(null)

  const addUser = () => {
    setUsers([...users, { ...newUser, id: users.length + 1 }])
    setNewUser({ username: '', email: '', role: 'User' })
  }

  const editUser = (user: User) => {
    setEditingUser(user)
  }

  const updateUser = () => {
    if (editingUser) {
      setUsers(users.map(u => u.id === editingUser.id ? editingUser : u))
      setEditingUser(null)
    }
  }

  const deleteUser = (id: number) => {
    setUsers(users.filter(u => u.id !== id))
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">User Management</h2>
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Add New User</h3>
        <input
          type="text"
          placeholder="Username"
          value={newUser.username}
          onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
          className="mr-2 px-2 py-1 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          className="mr-2 px-2 py-1 border rounded"
        />
        <select
          value={newUser.role}
          onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
          className="mr-2 px-2 py-1 border rounded"
        >
          <option value="User">User</option>
          <option value="Admin">Admin</option>
        </select>
        <button onClick={addUser} className="bg-green-500 text-white px-4 py-2 rounded">Add User</button>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left">Username</th>
            <th className="text-left">Email</th>
            <th className="text-left">Role</th>
            <th className="text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{editingUser?.id === user.id ? 
                <input 
                  value={editingUser.username} 
                  onChange={(e) => setEditingUser({...editingUser, username: e.target.value})}
                  className="px-2 py-1 border rounded"
                /> : user.username}
              </td>
              <td>{editingUser?.id === user.id ? 
                <input 
                  value={editingUser.email} 
                  onChange={(e) => setEditingUser({...editingUser, email: e.target.value})}
                  className="px-2 py-1 border rounded"
                /> : user.email}
              </td>
              <td>{editingUser?.id === user.id ? 
                <select
                  value={editingUser.role}
                  onChange={(e) => setEditingUser({...editingUser, role: e.target.value})}
                  className="px-2 py-1 border rounded"
                >
                  <option value="User">User</option>
                  <option value="Admin">Admin</option>
                </select> : user.role}
              </td>
              <td>
                {editingUser?.id === user.id ? (
                  <button onClick={updateUser} className="bg-blue-500 text-white px-2 py-1 rounded mr-2">Save</button>
                ) : (
                  <button onClick={() => editUser(user)} className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">Edit</button>
                )}
                <button onClick={() => deleteUser(user.id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserManagement