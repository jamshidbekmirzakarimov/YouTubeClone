import React, {useState} from 'react';
import { auth, provider } from './config';
import {signInWithPopup} from "firebase/auth" 
const signIn = () => {
  const [value, setValue] = useState()
  const handleFireClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email)
      localStorage.setItem()
    })
  }
  return (
    <div>
      <button onClick={handleFireClick}>signin with Google</button>
    </div>
  )
}

export default signIn
