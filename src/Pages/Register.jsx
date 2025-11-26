import { Link, useLocation, useNavigate } from 'react-router'; 
import { Mail, Lock, Gamepad2, UserRoundPen, ImagePlus } from 'lucide-react';
import { FcGoogle } from "react-icons/fc";
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.config';

export default function Register() {
    const { registerWithEmailPassword, setUser, handleGoogleSignin } = useContext(AuthContext);

    
    const location = useLocation();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value.trim();
        const pass = e.target.password.value;
        const photoUrl = e.target.photoUrl.value.trim();
        const name = e.target.name.value.trim();

        
        const uppercase = /[A-Z]/;
        const lowercase = /[a-z]/;

        if (pass.length < 6) {
            return alert("Password must be at least 6 characters");
        }
        if (!uppercase.test(pass)) {
            return alert("Password must have at least one uppercase letter");
        }
        if (!lowercase.test(pass)) {
            return alert("Password must have at least one lowercase letter");
        }
        if (!name) {
            return alert("Please enter your name");
        }

        try {
           
            const userCredential = await registerWithEmailPassword(email, pass);
            const user = userCredential.user;

            
            await updateProfile(user, {
                displayName: name,
                photoURL: photoUrl || null
            });

            
            setUser(user);

           
            const redirectTo = location.state?.from?.pathname || '/';
            navigate(redirectTo, { replace: true });

        } catch (err) {
            console.error("Registration failed:", err);
            alert(err.message || "Failed to register. Try again.");
        }
    };

    const googleSignup = async () => {
        try {
            const result = await handleGoogleSignin();
            setUser(result.user);

            const redirectTo = location.state?.from?.pathname || '/';
            navigate(redirectTo, { replace: true });
        } catch (err) {
            console.error(err);
            alert("Google sign-in failed");
        }
    };
    
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 py-12">
      
      <div className="absolute inset-0 bg-linear-to-br from-purple-900/20 via-gray-900 to-pink-900/20" />
      
      <div className="relative z-10 max-w-5xl w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          
          <div className="text-center lg:text-left max-w-lg">
            <div className="flex justify-center lg:justify-start mb-6">
              <Gamepad2 className="w-16 h-16 text-purple-400" />
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-black text-white tracking-tight">
              Welcome
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400">
                Gamer
              </span>
            </h1>
            
            <p className="mt-6 text-xl text-gray-300 leading-relaxed">
              Join the ultimate gaming hub. Play, compete, and level up with millions of players worldwide.
            </p>
            
          </div>

          
          <div className="w-full max-w-md">
            <div className="bg-gray-800/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-700 p-8">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Register an Account
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="flex items-center gap-3 text-gray-300 mb-2 text-sm font-medium">
                    <Mail className="w-5 h-5" />
                    Email Address
                  </label>
                  <input name='email'
                    type="email"
                    placeholder="gamer@domain.com"
                    className="w-full px-4 py-4 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all"
                  />
                </div>
                <div>
                  <label className="flex items-center gap-3 text-gray-300 mb-2 text-sm font-medium">
                    <UserRoundPen className="w-5 h-5" />
                    Full Name
                  </label>
                  <input name='name'
                    type="text"
                    placeholder="First Name + Last Name"
                    className="w-full px-4 py-4 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all"
                  />
                </div>
                <div>
                  <label className="flex items-center gap-3 text-gray-300 mb-2 text-sm font-medium">
                    <ImagePlus className="w-5 h-5" />
                    PhotoURL
                  </label>
                  <input name='photoUrl'
                    type="text"
                    placeholder="https://yourphoto/"
                    className="w-full px-4 py-4 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-3 text-gray-300 mb-2 text-sm font-medium">
                    <Lock className="w-5 h-5" />
                    Password
                  </label>
                  <input name='password'
                    type="password"
                    placeholder="••••••••"
                    className="w-full px-4 py-4 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all"
                  />
                </div>

                <div className="flex justify-center flex-col sm:flex-row items-center gap-4 text-sm">
                  
                  <Link to="/login" className="text-pink-400 hover:text-pink-300 transition-colors">
                    Already have an account? <span className="font-bold">Sign In</span>
                  </Link>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 mt-6 bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-xl font-bold text-lg text-white shadow-xl transform transition-all hover:scale-[1.02] active:scale-100"
                >
                  Sign Up
                </button>

                <div className="relative my-8">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-600" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-gray-800 text-gray-500">Or continue with</span>
                  </div>
                </div>

                <button onClick={googleSignup} className="py-3 px-6 mx-auto bg-gray-700/50 hover:bg-gray-600 border border-gray-600 rounded-xl text-white font-medium transition-all flex justify-center items-center gap-2">
                    <FcGoogle />Google
                  </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}