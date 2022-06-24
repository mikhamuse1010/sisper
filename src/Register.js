import './Register.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Register() {
    return (
        <div className = "login-header">
            <h2> Register here! </h2>
            <div className = "login-header">
                <h2> Sistem Informasi Rekomendasi Izin Penelitian </h2>
            </div>
            <div className = "login-pane">
                <h3>Sign in to start your session!</h3>
                <Box
                    component="form"
                    sx={{'& > :not(style)': { m: 1, width: '25ch' },}}
                    noValidate
                    autoComplete="off"
                >
                <TextField id="outlined-basic" label="Username" variant="outlined" />
                </Box>
                <Box
                    component="form"
                    sx={{'& > :not(style)': { m: 1, width: '25ch' },}}
                    noValidate
                    autoComplete="off"
                >
                <TextField id="outlined-basic" label="Password" variant="outlined" />
                </Box>
                <Box>
                <Button variant="contained">Register</Button>
                </Box>
                <Box>
                Have an account?
                </Box>
                <Box>
                <Button variant="contained">Sign In</Button>
                </Box>
            </div>
        </div>
    )
}

export default Register;