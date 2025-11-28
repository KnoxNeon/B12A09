import { sendPasswordResetEmail } from 'firebase/auth';
import { Mail } from 'lucide-react'
import React from 'react'
import { useParams } from 'react-router';
import auth from '../firebase/firebase.config';

const ForgetPass = () => {
    const {email} = useParams()

    const handleSubmit = (e) =>{
        e.preventDefault()
        const formEmail = e.target.email.value

        sendPasswordResetEmail(auth, formEmail)
          .then(() => {
            window.open('https://mail.google.com/')
          })
          .catch((error) => {
            console.log(error)
          });
        
    }
  return (
    <div><title>Reset Password</title>
      <div className="w-[400px] mx-auto pt-10 space-y-2">
        <form onSubmit={handleSubmit} className="space-y-6">
          <label className="flex items-center gap-3 text-gray-300 mb-2 text-sm font-medium">
            <Mail className="w-5 h-5" />
            Email Address
          </label>
          <input
            defaultValue={email}
            name="email"
            type="email"
            placeholder="gamer@domain.com"
            className="w-full px-4 py-4 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all"
          />
          <button className="w-[400px] mx-auto py-0.5 bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-xl font-bold text-lg text-white shadow-xl transform transition-all hover:scale-[1.02] active:scale-100">
            Send Mail
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgetPass
