import React from "react";
import Login from "./auth/Login";
import { useAuth } from "./auth/AuthProvider";
import MediaUploader from "./components/MediaUploader";

function App() {
  const { user, logout } = useAuth();

  if (!user) return <Login />;

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold text-gray-800">Declutterify</h1>
        <div>
          <span className="mr-4 text-sm text-gray-600">
            {user.displayName || user.email}
          </span>
          <button
            onClick={logout}
            className="bg-gray-800 text-white px-4 py-1 rounded"
          >
            Logout
          </button>
        </div>
      </header>
      <MediaUploader />
    </div>
  );
}

export default App;