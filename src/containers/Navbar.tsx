import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import makeStyles from "@material-ui/core/styles/makeStyles";
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
    gridItem: {
        display: "flex",
        alignItems: "center"
    },
    logo: {
        height: "30px",
        width: "30px",
    },
    appBar: {
        background: "#fff",
        height: "70px"
    },

    logInButton: {
        backgroundColor: "#e1ecf4",
        color: "#39739d",
        borderColor: "#7aa7c7",
        "&:hover": {
            background: "#b3d3ea"
        }
    },
    signUpButton: {
        marginLeft: "0.3rem",
        backgroundColor: "#0095ff",
        color: "#fff",
        borderColor: "transparent",
        "&:hover": {
            background: "#0077cc"
        }
    },
    textField: {
        width: "100%",
    },
    inputInput: {
        padding: "8px 0 8px 10px",
    },
})

const Navbar = () => {
    const classes = useStyles();

    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <Grid container>
                    <Grid xs={1}/>
                    <Grid xs={3} className={classes.gridItem}>
                        <IconButton aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <img
                            src={process.env.PUBLIC_URL + "/svgs/stack-overflow.svg"}
                            className={classes.logo}
                            alt="stack-overflow"
                        />
                        <Typography variant="h6" color="primary">
                            stackoverflow
                        </Typography>
                    </Grid>
                    <Grid xs={4} className={classes.gridItem}>
                        <TextField
                            placeholder="Search..."
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                                classes: {
                                    input: classes.inputInput,
                                },
                            }}
                            color="secondary"
                            className={classes.textField}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid xs={1}/>
                    <Grid xs={2} className={classes.gridItem} justify="flex-end">
                        <Button
                            variant="outlined"
                            className={classes.logInButton}
                        >
                            Login in
                        </Button>
                        <Button
                            variant="outlined"
                            className={classes.signUpButton}
                        >
                            Sign up
                        </Button>
                    </Grid>
                    <Grid xs={1}/>
                </Grid>
            </Toolbar>
        </AppBar>
    )
};

export default Navbar;