import React, { useContext, useState } from 'react'
import { AuthContext } from '../Provider/AuthProvider'
import { updateProfile } from 'firebase/auth'
import auth from '../firebase/firebase.config'

const Profile = () => {
    const {user, setUser} = useContext(AuthContext)
    const [isOpen, setIsOpen] = useState(false)

    const handleOpenForm = () => {
      setIsOpen(!isOpen)
    }

    const handleUpdate = async (e) =>{
      e.preventDefault()
      const name = e.target.name.value
      const photoUrl = e.target.photoUrl.value

     updateProfile(auth.currentUser, {
      displayName: name, photoURL: photoUrl
     }).then(() =>{
      setUser({...user, photoURL: photoUrl, displayName: name});
     }).catch((error)=>{
      console.log(error)
     })           
    }

  return (
    <div className="max-w-sm mx-auto mt-10 bg-white rounded-xl shadow-lg overflow-hidden">
      <title>Your Profile</title>
      <div className="bg-[#0f172a] p-6 text-center">
        <img
          src={user.photoURL}
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto border-4 border-orange-500 shadow-xl object-cover"
        />
      </div>

      <div className="p-6 space-y-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-orange-500">
            {user.displayName}
          </h2>
          <p className="text-gray-500 text-sm">
            @{user?.displayName.trim().replace(/\s+/g, "_").toLowerCase()}
          </p>
        </div>

        <div className="space-y-3 text-gray-700">
          <div className="flex items-center gap-3">
            <span className="font-medium text-orange-500">Email:</span>
            <span className="text-gray-600">{user.email}</span>
          </div>
        </div>
        <button onClick={handleOpenForm} className="w-full py-1 bg-orange-500 text-white font-semibold hover:scale-110 rounded-xl transition whitespace-nowrap">Edit Profile</button>

        {
          isOpen && (
            <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-[#0f172a] w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleUpdate} className="fieldset">
                <label className="label text-orange-500">Display Name</label>
                <input
                  defaultValue={user?.displayName}
                  name='name'
                  type="text"
                  className="input"
                  placeholder="display name"
                />
                <label className="label text-orange-500">PhotoURL</label>
                <input
                  defaultValue={user.photoURL}
                  name='photoUrl'
                  type="text"
                  className="input"
                  placeholder="paste url here"
                /><button className="w-full mt-2 py-1 bg-orange-500 text-white font-semibold hover:scale-110 rounded-xl transition whitespace-nowrap">Update Profile</button>
              </form>
            </div>
            
          </div>
        </div>) }
      </div>
    </div>
  );
  
}

export default Profile
