import React, { useState } from "react";
import {Typography,TextField,Button} from '@mui/material'


export default function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleLogin = () => {
        console.log('Username:', username);
        console.log('Password:', password);
    };
return(
    <>
    <Typography variant="h5" sx ={{marginBottom: '10px'}}>Login</Typography>
    <form>
    <TextField sx ={{marginBottom: '10px'}}
      label="Username"
      variant="outlined"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
    />
    <br/>
    <TextField
      sx ={{marginBottom: '10px'}}
      label="Password"
      type="password"
      variant="outlined"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    <br />
    <Button variant="contained" onClick={handleLogin}>
      Login
    </Button>
  </form>
    </>
)
}