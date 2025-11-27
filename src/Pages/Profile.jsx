import React, { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider'

const Profile = () => {
    const {user} = useContext(AuthContext)
    console.log(user)
  return (
    <div className="max-w-sm mx-auto mt-10 bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="bg-[#0f172a] p-6 text-center">
        <img
          src={user.photoURL}
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto border-4 border-orange-500 shadow-xl object-cover"
        />
      </div>

      <div className="p-6 space-y-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-orange-500">{user.displayName}</h2>
          <p className="text-gray-500 text-sm">@{user.displayName}</p>
        </div>

        <div className="space-y-3 text-gray-700">
          <div className="flex items-center gap-3">
            <span className="font-medium text-orange-500">Email:</span>
            <span className="text-gray-600">{user.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default Profile
