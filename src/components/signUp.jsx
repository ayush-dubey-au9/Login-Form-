import React, {useState} from "react";
import {useHistory , Link} from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import {userActionHelper} from '../redux/action/userAction';



const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function SignUp() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const [firstname,setfirstname] = useState('')
  const [lastname,setlastname] = useState('')
  const [email,setemail] = useState('')
  const [password,setpassword] = useState('')

  const store =  useSelector((store) => store )
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <PersonAddIcon/>
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus

                onChange = {(e) => {
                setfirstname(e.target.value)
                //console.log('firstname',firstname)
                }
            }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange = {(e) => {
                    setlastname(e.target.value)
                    //console.log('lastname',lastname)
                }
            }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange = {(e) => {
                    setemail(e.target.value)
                    //console.log('email',email)
                }
            }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange = {(e) => {
                    setpassword(e.target.value)
                    //console.log('password',password)
                }
            }
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}

            onClick = {(e) => {
                e.preventDefault();
                /*console.log('firstname',firstname)
                console.log('lastname',lastname)
                console.log('password',password)
                console.log('email',email)*/
                
                localStorage.setItem("userData", JSON.stringify({firstname, lastname ,password,email}))
                /*console.log('useraction',userActionHelper)*/
                dispatch(userActionHelper({firstname, lastname ,password,email}))

                history.push('/')

            }}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to={"/"} variant="body2">
                {'Already have an account? Sign In'}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
      </Box>
    </Container>
  );
}
