import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AdminHeader from './components/admin/AdminHeader'
import Dashboard from './components/admin/Dashboard'
import UserManagement from './components/admin/UserManagement'
import ContentManagement from './components/admin/ContentManagement'
import Analytics from './components/admin/Analytics'
import { AuthProvider } from './contexts/AuthContext'

function AdminPanel() {
  return (
    <AuthProvider>
      <Router basename="/admin">
        <div className="flex flex-col min-h-screen">
          <AdminHeader />
          <main className="flex-grow p-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/users" element={<UserManagement />} />
              <Route path="/content" element={<ContentManagement />} />
              <Route path="/analytics" element={<Analytics />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  )
}

export default AdminPanel