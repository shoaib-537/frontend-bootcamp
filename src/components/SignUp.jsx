import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material";
import LockPersonOutlinedIcon from "@mui/icons-material/LockPersonOutlined";

const SignUp = () => {
  const paperStyle = {
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
          ></TextField>
          <TextField
            variant="standard"
            label="confirm password"
            placeholder="Confirm your Password"
            type="password"
            fullWidth
            required
          ></TextField>
          <TextField
            variant="standard"
            label="first name"
            placeholder="Enter your First Name"
            fullWidth
            required
          ></TextField>
          <TextField
            variant="standard"
            label="last name"
            placeholder="Enter your Last Name"
            fullWidth
            required
          ></TextField>
      
          <TextField
            variant="standard"
            label="age"
            placeholder="Enter your Age"
            type="number"
            fullWidth
            required
          ></TextField>
          <TextField
            variant="standard"
            label="phone_number"
            placeholder="Enter your Phone Number"
            type="number"
            fullWidth
            required
            style={commonStyle}
          ></TextField>
          <Button variant="contained" fullWidth style={commonStyle}>
            SignUp
          </Button>
          <Typography style={commonStyle}>
            Already have an account?<Link href="#">Login</Link>
          </Typography>
        </Paper>
      </Grid>
    </>
  );
};

export default SignUp;
