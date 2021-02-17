import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import GoogleButton from "./GoogleButton";
import GithubButton from "./GithubButton";
import FacebookButton from "./FacebookButton";
import Input from "./Input";
import ModalButton from "./ModalButton";
import FormWrapper from "./FormWrapper";
import DialogWrapper from "./DialogWrapper";

type TypeSignUpDialog = {
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

const SignUpDialog = ({open, onClose}: TypeSignUpDialog) => {
    const classes = useStyles();

    return (
        <DialogWrapper open={open} onClose={onClose}>
            <GoogleButton title="Sign up with Google"/>
            <GithubButton title="Sign up with Github"/>
            <FacebookButton title="Sign up with Facebook"/>
            <FormWrapper>
                <Input label="Email" style={{margin: "0.5rem 0"}}/>
                <Input label="Password" style={{margin: "0.5rem 0"}}/>
                <ModalButton title="Log in" class={classes.logInButton}/>
            </FormWrapper>
        </DialogWrapper>
    )
}

export default SignUpDialog;