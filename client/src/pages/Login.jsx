import { GoogleAuthProvider, getAuth, signInWithPopup,signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth";
import { AuthContext } from "../context/AuthProvider";
import { Image, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Link,
  Card,
  Stack,
  Button,
  Divider,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import { LoadingButton } from "@mui/lab/";
import { alpha, useTheme } from "@mui/material/styles";
import InputAdornment from "@mui/material/InputAdornment";
import { useState, useContext } from "react";
import { bgGradient } from "../theme/css";
import { useNavigate } from "react-router-dom";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function Login() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth();
  const { user } = useContext(AuthContext);
  const navagate = useNavigate();

  const handleRegistration = async () => {
    createUserWithEmailAndPassword(auth, username, password)
    .then((userCredential) => {
      console.log("Signed");
    })
    .catch((error) => {
      setMessage(error.code);
    });
  };


  const handleLogin = async () => {
    setLoading(true);
    console.log("Username:", username);
    console.log("Password:", password);
    await sleep(1000);
    signInWithEmailAndPassword(auth, username, password)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      setMessage(error.code);
    });
    setLoading(false);
  };
  const LoginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const {user:{uid,email}} = await signInWithPopup(auth, provider);
    const {data}= await GraphQLrequest({query:`mutation Mutation($userId: String!, $userName: String, $email: String, $type: String) {
      register(userId: $userId, userName: $userName, email: $email, type: $type) {
        userId
      }
    }`,variables:{
      userId: uid,
      userName: "",
      email,
      type: "SV"
    }
  });
  console.log('register',data)
  };
  const theme = useTheme();

  const [showPassword, setShowPassword] = useState(false);

  const renderForm = (
    <>
      <Stack spacing={3}>
        <TextField
          onChange={(e) => setUsername(e.target.value)}
          label="Tài khoản"
          InputProps={{
            style: {
              borderRadius: "10px",
            },
          }}
        />
        <TextField
          label="Mật Khẩu"
          onChange={(e) => setPassword(e.target.value)}
          type={showPassword ? "text" : "password"}
          InputProps={{
            style: {
              borderRadius: "10px",
            },
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
        sx={{ my: 3 }}
      >
        <Link variant="subtitle2" underline="hover">
          Quên mật khẩu ?
        </Link>
      </Stack>
      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        color="inherit"
        onClick={handleLogin}
        loading={loading}
        sx={{backgroundColor: '#212b36',color: '#ffffff',
        '&:hover': {
          backgroundColor: '#ffffff',color: "#212b36"
        },
      }}
      >
        <span>Đăng nhập</span>
      </LoadingButton>
    </>
  );
  return (
    <Box
      sx={{
        padding: "20vh",
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: "src/assets/background/overlay_4.jpg",
        }),
        height: 1,
      }}
    >
      {/* <Logo
        sx={{
          position: 'fixed',
          top: { xs: 16, md: 24 },
          left: { xs: 16, md: 24 },
        }}
      /> */}

      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Card
          sx={{
            p: 5,
            width: 1,
            maxWidth: 420,
            borderRadius: "20px",
            boxShadow: 2,
          }}
        >
          <Typography variant="h4" sx={{ fontSize: "both" }}>
            Đăng Nhập
          </Typography>

          <Typography variant="body2" sx={{ mt: 2, mb: 5 }}>
            Bạn là doanh nghiệp ?
            <Link variant="subtitle2" sx={{ ml: 0.5 }}>
              Đăng ký hợp tác
            </Link>
          </Typography>

          <Box>
            <Button
              fullWidth
              size="large"
              color="inherit"
              variant="outlined"
              onClick={LoginWithGoogle}
              sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
            >
              <img style={{height: '25px',marginRight: '5px'}} src="src/images/icons8-google.svg"/>
              Đăng nhập với Google 
            </Button>
          </Box>

          <Divider sx={{ my: 3 }}>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Hoặc
            </Typography>
          </Divider>
          {renderForm}
          <Typography sx={{color: 'red',textAlign: 'Center',marginTop: '10px',fontWeight: '400'}}>{message}</Typography>
        </Card>
      </Stack>
    </Box>
  );
}
