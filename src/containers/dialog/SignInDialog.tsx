import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import GoogleButton from "./GoogleButton";
import GithubButton from "./GithubButton";
import FacebookButton from "./FacebookButton";
import Input from "./Input";
import ModalButton from "./ModalButton";
import FormWrapper from "./FormWrapper";
import DialogWrapper from "./DialogWrapper";

type TypeSignInDialog = {
    open: boolean,
    onClose: () => void
}

const useStyles = makeStyles({
    logInButton: {
        background: "#0095ff",
        color: "#fff",
        "&:hover": {
            background: "#0077cc"
        },
    }
});

const SignInDialog = ({open, onClose}: TypeSignInDialog) => {
    const classes = useStyles();

    return (
        <DialogWrapper open={open} onClose={onClose}>
            <GoogleButton title="Sign in with Google"/>
            <GithubButton title="Sign in with Github"/>
            <FacebookButton title="Sign in with Facebook"/>
            <FormWrapper>
                <Input label="Nickname" style={{margin: "0.5rem 0"}}/>
                <Input label="Email" style={{margin: "0.5rem 0"}}/>
                <Input label="Password" style={{margin: "0.5rem 0"}}/>
                <ModalButton title="Sign up" class={classes.logInButton}/>
            </FormWrapper>
        </DialogWrapper>
    )
}

export default SignInDialog;