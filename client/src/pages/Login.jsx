import React, { useContext, useState } from "react";
import { Typography, TextField, Button ,Paper} from "@mui/material";
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
  return (
    <>
      <Paper elevation={3} style={{ padding: '20px', maxWidth: '300px', margin: 'auto', marginTop: '100px' }}>
      <Typography variant="h5" gutterBottom>
        Đăng nhập
      </Typography>
      <TextField
        label="Tên người dùng"
        variant="outlined"
        fullWidth
        margin="normal"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Mật khẩu"
        variant="outlined"
        type="password"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" color="primary" sx={{marginTop: '10px'}} fullWidth onClick={handleLogin}>
        Đăng nhập
      </Button>
      <Button fullWidth onClick={LoginWithGoogle} sx={{marginTop: '10px'}}>Đăng nhập với Google</Button>
    </Paper>
    </>
  );
}
