import React from "react"
import makeStyles from "@material-ui/core/styles/makeStyles";
import FacebookIcon from "@material-ui/icons/Facebook";
import ModalButton from "./ModalButton"

const useStyles = makeStyles({
    button: {
        background: "#385499",
        color: "#fff",
        "&:hover": {
            background: "#314a86"
        }
    },
});

type FacebookButton= {
    title: React.ReactNode
}

const FacebookButton = (props: FacebookButton) => {
    const classes = useStyles();

    return (
        <ModalButton
            icon={<FacebookIcon />}
            title={props.title}
            class={classes.button}
        />
    )
};

export default FacebookButton;