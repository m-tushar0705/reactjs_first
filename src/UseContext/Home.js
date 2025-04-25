import React from 'react';
import { useAuth } from './AuthContext';

export default function Home() {
  const { user, login, logout } = useAuth();

  return (
    <div style={{ padding: 20 }}>
      {user ? (
        <>
          <h2>👋 Welcome, {user.name}</h2>
          <p>🛡 Role: {user.role}</p>
          {user.role === 'admin' ? <p>🔐 Admin Panel Access</p> : <p>👤 User Dashboard</p>}
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <p>🔒 Not logged in</p>
          <button onClick={() => login('Tushar', 'admin', true)}>Login as Admin</button>
          <button onClick={() => login('Ravi', 'user', false)}>Login as User</button>
        </>
      )}
    </div>
  );
}
