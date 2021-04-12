import React ,{useState,useEffect} from 'react';
import { useHistory , Link} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
 
import {useDispatch} from 'react-redux';
import {userUpdateHelper,loginActionHelper} from '../redux/action/userAction';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" to="/">
        iDreamCareer
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}




const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();


  const [email,setemail] = useState('');
  const [password,setpassword] = useState('');
  const [error, seterror] = useState('');


  useEffect(() => {
    let userData =localStorage.getItem("userData")

    userData = JSON.parse(userData)
    
    console.log('userData',userData)
    dispatch(userUpdateHelper(userData))




      

  }, [])





  return (
    <>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>

          <TextField    onChange = {(e) => { 
            seterror('')
           setemail(e.target.value)
          }}


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

            onChange = {(e) => {
              setpassword(e.target.value)
              seterror('')

              console.log('password',password)
            }}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          {
            error && <div style={{color:'red'}}>{error}</div>
          }
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}

            onClick = {(e) =>{
              e.preventDefault();
              /*console.log('email',email)
              console.log('password',password)*/

              let userData =localStorage.getItem("userData")
            
              userData = JSON.parse(userData)

              if(userData){
                if(userData.email === email && userData.password === password){
                  seterror('')
                  localStorage.setItem("userData",JSON.stringify({...userData,"isloggedIn":true}))
                  dispatch(loginActionHelper({"isloggedIn":true}))

                  
                  history.push('/profile')


                }
                else {
                   seterror('Inavalid Input')
                }
              }
            }}
          >
            Sign In
          </Button>
          <Grid container>
           
            <Grid item>
              <Link to = "/signup" variant="body2">
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
    </>
  );
}