import React, { createContext, useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {CircularProgress} from "@mui/material";
export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const auth = getAuth();
  const navigate = useNavigate();
  const [isLoading,setIsLoading] = useState(true);
  useEffect(() => {
    const unsubcribed = auth.onIdTokenChanged((user) => {
      if (user?.uid) {
        setUser(user);
        // if(user.accessToken !== localStorage.getItem('accessToken'))
        // {
        //    window.location.reload();
        // }
        localStorage.setItem("accessToken", user.accessToken);
        setIsLoading(false);
        if(user.email === 'admin@gmail.com')
        {
          navigate("/admin");
        }
        else
        navigate("/");
    }
    else{
        setIsLoading(false);
        setUser({});
        localStorage.clear();
        navigate("/login");
    }
    });
    return () => {
      unsubcribed();
    };
  }, [auth]);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {isLoading? <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}><CircularProgress/></div>: children}
    </AuthContext.Provider>
  );
}
