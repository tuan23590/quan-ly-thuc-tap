import React, { createContext, useEffect, useState } from "react";
import { getAuth, reload } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {CircularProgress} from "@mui/material";
export const AuthContext = createContext();
import { findInternsByUid } from "../utils/userUtils";
export default function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const auth = getAuth();
  const navigate = useNavigate();
  const [isLoading,setIsLoading] = useState(true);
  // useEffect(() => {
  //   const unsubcribed = auth.onIdTokenChanged((user) => {
  //     if (user?.uid) {
  //       setUser(user);
  //       // if(user.accessToken !== localStorage.getItem('accessToken'))
  //       // {
  //       //    window.location.reload();
  //       // }
  //       localStorage.setItem("accessToken", user.accessToken);
  //       setIsLoading(false);
  //       if(user.email === 'admin@gmail.com')
  //       {
  //         navigate("/admin");
  //       }
  //       else
  //       navigate("/");
  //   }
  //   else{
  //       setIsLoading(false);
  //       setUser({});
  //       localStorage.clear();
  //       navigate("/login");
  //   }
  //   });
  //   return () => {
  //     unsubcribed();
  //   };
  // }, [auth]);

  useEffect(() => {
    const unsubscribed = auth.onIdTokenChanged(async (user) => {
      if (user?.uid) {
        try {
          localStorage.setItem("accessToken", user.accessToken);
          setIsLoading(false);
          const interns = await findInternsByUid(user.uid);
          setUser({ ...user, interns });
          if (user.email === 'admin@gmail.com') {
            navigate("/admin");
          } else {
            navigate("/");
          }
        } catch (error) {
          console.error("Error fetching interns:", error);
          setIsLoading(false);
          setUser({});
          localStorage.clear();
          navigate("/login");
        }
      } else {
        setIsLoading(false);
        setUser({});
        localStorage.clear();
        navigate("/login");
      }
    });

    return () => {
      unsubscribed();
    };
  }, [auth, navigate]);
  
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {isLoading? <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}><CircularProgress/></div>: children}
    </AuthContext.Provider>
  );
}