import React from "react";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import {
  Box,
  Button,
  Link,
  TextField,
  Typography,
  CssBaseline,
  Grid,
  Checkbox,
  Avatar,
  FormControlLabel,
  Container,
} from "@material-ui/core";
import useStyles from "./signInStyles";
import { Header } from "../blog/Header";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const signinsections = [
  { title: "Simple Sign up", url: "/signup" },
  { title: "User Sign-in", url: "/signinside" },
  { title: "Cool Sign-up", url: "/signupside" },
  { title: "Pricing", url: "/pricing" },
  { title: "Gallary", url: "/album" },
  { title: "Blog", url: "/blog" },
  { title: "Contact", url: "footer" },
];

export const SignIn = () => {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <Header title="Sign-in" sections={signinsections} />

      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href={"/signup"} variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>

      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};
