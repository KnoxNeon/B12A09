import { createUserWithEmailAndPassword } from "firebase/auth"
import { createContext } from "react"
import auth from "../firebase/firebase.config"

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const registerWithEmailPassword = (email, pass) =>{
        console.log(email, pass)
        return createUserWithEmailAndPassword(auth, email, pass)
    }

  const authData = {
    registerWithEmailPassword
  }
  return <AuthContext value={authData}>{children}</AuthContext>
}

export default AuthProvider
