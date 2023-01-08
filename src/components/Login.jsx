import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
  
} from "@mui/material";
import {Link} from 'react-router-dom'
import LockPersonOutlinedIcon from "@mui/icons-material/LockPersonOutlined";

export default function login() {
  const paperStyle = {
    height: "70vh",
    width: 280,
    padding: 20,
    margin: "40px auto",
  };
  const avatarStyle = {
    backgroundColor: "green",
  };
  const commonStyle = {
    marginTop: 15,
    marginBottom: 15,
  };
  return (
    <>
      <Grid>
        <Paper elevation={7} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockPersonOutlinedIcon />
            </Avatar>
            <h2>Login</h2>
          </Grid>
          <TextField
            variant="standard"
            label="username"
            placeholder="Enter your UserName"
            fullWidth
            required
          ></TextField>
          <TextField
            variant="standard"
            label="password"
            placeholder="Enter your Password"
            type="password"
            fullWidth
            required
            style={commonStyle}
          ></TextField>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Remember Me"
          />
          <Button variant="contained" fullWidth style={commonStyle}>
            Login
          </Button>
          <Typography>
            <Link href="#">Forget Password</Link>
          </Typography>
          <Typography style={commonStyle}>
            Don't have account?<Link to='/signup'>Create Account</Link>
          </Typography>
        </Paper>
      </Grid>
    </>
  );
}
