import React, { useState, useEffect } from "react";
import {useHistory} from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Header from "./header";



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

export default function Profile() {
    const classes = useStyles();
    const history = useHistory();
    

    const [firstname, setfirstname] = useState('')
    const [lastname, setlastname] = useState('')
    const [email, setemail] = useState('')
    const [DateofBirth, setDateofBirth] = useState('')
    const [PhoneNo, setPhoneNo] = useState('')
    const [Address, setAddress] = useState('')
    const [message, setMessage] = useState('')
    const [password, setPassword] = useState('')






    useEffect(() => {
        let userData = localStorage.getItem("userData")

        if (userData) {
            userData = JSON.parse(userData)

        if(userData.isloggedIn) {
            console.log(userData)

            setfirstname(userData.firstname)
            setlastname(userData.lastname)
            setemail(userData.email)
            setDateofBirth(userData.DateofBirth)
            setPhoneNo(userData.PhoneNo)
            setAddress(userData.Address)
            setPassword(userData.password)

        }

        else{
            history.push('/')
        }

           


        }

    }, [])





    return (
        <>

        <Header/>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Update
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
                                value={firstname}

                                onChange={(e) => {
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
                                value={lastname}
                                onChange={(e) => {
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
                                value={email}
                                onChange={(e) => {
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
                                name="Date of  Birth"
                                label="Date of  Birth"
                                type="date"
                                id="date"
                                autoComplete="date of birth"
                                value={DateofBirth}
                                onChange={(e) => {
                                    setDateofBirth(e.target.value)
                                    //console.log('password',password)
                                }
                                }
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="Phone number"
                                label="Phone number"
                                type="phone"
                                id="phone "
                                autoComplete="phone no"
                                value={PhoneNo}
                                onChange={(e) => {
                                    setPhoneNo(e.target.value)
                                    //console.log('password',password)
                                }
                                }
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="Address"
                                label="Address"
                                type="address"
                                id="address "
                                autoComplete="address"
                                value={Address}
                                onChange={(e) => {
                                    setAddress(e.target.value)

                                }
                                }
                            />
                        </Grid>
                    </Grid>

                    {
            message && <div style={{color:'green'}}>{message}</div>
          }

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}

                        onClick={(e) => {
                            e.preventDefault();
                            /*console.log('firstname', firstname)
                            console.log('lastname', lastname)
                            console.log('email', email)
                            console.log('dateofbirth', DateofBirth)
                            console.log('phoneNo', PhoneNo)
                            console.log('address', Address)*/



                            localStorage.setItem("userData", JSON.stringify({ firstname, lastname, email, DateofBirth, PhoneNo, Address ,password,'isloggedIn': true}))

                            setMessage('Profile is Updated Successfully')

                        }}
                    >
                        Update
          </Button>
                </form>
            </div>
            <Box mt={5}>
            </Box>
        </Container>
        </>
    );
}
