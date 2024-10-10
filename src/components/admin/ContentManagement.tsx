import React, { useState } from 'react'

interface ContentItem {
  id: number
  title: string
  content: string
  page: string
}

const ContentManagement: React.FC = () => {
  const [contentItems, setContentItems] = useState<ContentItem[]>([
    { id: 1, title: 'Home Hero', content: 'Custom Kitchen Solutions', page: 'Home' },
    { id: 2, title: 'About Us', content: 'We are a leading kitchen design company...', page: 'About' },
  ])
  const [newItem, setNewItem] = useState({ title: '', content: '', page: 'Home' })
  const [editingItem, setEditingItem] = useState<ContentItem | null>(null)

  const addItem = () => {
    setContentItems([...contentItems, { ...newItem, id: contentItems.length + 1 }])
    setNewItem({ title: '', content: '', page: 'Home' })
  }

  const editItem = (item: ContentItem) => {
    setEditingItem(item)
  }

  const updateItem = () => {
    if (editingItem) {
      setContentItems(contentItems.map(i => i.id === editingItem.id ? editingItem : i))
      setEditingItem(null)
    }
  }

  const deleteItem = (id: number) => {
    setContentItems(contentItems.filter(i => i.id !== id))
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Content Management</h2>
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Add New Content</h3>
        <input
          type="text"
          placeholder="Title"
          value={newItem.title}
          onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
          className="mr-2 px-2 py-1 border rounded"
        />
        <input
          type="text"
          placeholder="Content"
          value={newItem.content}
          onChange={(e) => setNewItem({ ...newItem, content: e.target.value })}
          className="mr-2 px-2 py-1 border rounded"
        />
        <select
          value={newItem.page}
          onChange={(e) => setNewItem({ ...newItem, page: e.target.value })}
          className="mr-2 px-2 py-1 border rounded"
        >
          <option value="Home">Home</option>
          <option value="About">About</option>
          <option value="Products">Products</option>
          <option value="Contact">Contact</option>
        </select>
        <button onClick={addItem} className="bg-green-500 text-white px-4 py-2 rounded">Add Content</button>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left">Title</th>
            <th className="text-left">Content</th>
            <th className="text-left">Page</th>
            <th className="text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contentItems.map(item => (
            <tr key={item.id}>
              <td>{editingItem?.id === item.id ? 
                <input 
                  value={editingItem.title} 
                  onChange={(e) => setEditingItem({...editingItem, title: e.target.value})}
                  className="px-2 py-1 border rounded"
                /> : item.title}
              </td>
              <td>{editingItem?.id === item.id ? 
                <input 
                  value={editingItem.content} 
                  onChange={(e) => setEditingItem({...editingItem, content: e.target.value})}
                  className="px-2 py-1 border rounded"
                /> : item.content}
              </td>
              <td>{editingItem?.id === item.id ? 
                <select
                  value={editingItem.page}
                  onChange={(e) => setEditingItem({...editingItem, page: e.target.value})}
                  className="px-2 py-1 border rounded"
                >
                  <option value="Home">Home</option>
                  <option value="About">About</option>
                  <option value="Products">Products</option>
                  <option value="Contact">Contact</option>
                </select> : item.page}
              </td>
              <td>
                {editingItem?.id === item.id ? (
                  <button onClick={updateItem} className="bg-blue-500 text-white px-2 py-1 rounded mr-2">Save</button>
                ) : (
                  <button onClick={() => editItem(item)} className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">Edit</button>
                )}
                <button onClick={() => deleteItem(item.id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ContentManagement