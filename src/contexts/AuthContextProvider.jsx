
import React, { createContext, useEffect, useState } from 'react'
import { userObserver } from '../helpers/firebase';

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(false)
  
  useEffect(() => {
  
    userObserver(setCurrentUser)
  }, [])

  
  return (
    <div>
      <AuthContext.Provider value={{ currentUser }}>
        {children}
      </AuthContext.Provider>
    </div>
  );
}


export default AuthContextProvider;