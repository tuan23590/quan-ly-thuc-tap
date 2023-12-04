import React, { useContext, useState } from "react";
import { Typography, TextField, Button } from "@mui/material";
import { GoogleAuthProvider, getAuth, signInWithPopup} from "firebase/auth";
import { AuthContext } from "../context/AuthProvider";
import {useNavigate} from 'react-router-dom'

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();
  const {user} = useContext(AuthContext)
  const navagate = useNavigate();
  const handleLogin = () => {
    console.log("Username:", username);
    console.log("Password:", password);
  };
  const LoginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth,provider);
  };
  if(user?.uid){
    navagate('/');
    return;
  }
  return (
    <>
      <Typography variant="h5" sx={{ marginBottom: "10px" }}>
        Login
      </Typography>
      <form>
        <TextField
          sx={{ marginBottom: "10px" }}
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br/>
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          sx={{ marginBottom: "10px" }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <Button 
        variant="contained" 
        onClick={handleLogin}
        sx={{ marginBottom: "10px" }}>
          Login
        </Button>
        <br />
        <Button
          variant="contained"
          color="primary"
          onClick={LoginWithGoogle}
        >
          Login With Google
        </Button>
      </form>
    </>
  );
}
