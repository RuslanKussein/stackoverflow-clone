import React from "react"
import GTranslateIcon from "@material-ui/icons/GTranslate";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ModalButton from "./ModalButton"

const useStyles = makeStyles({
    button: {
        border: "1px solid #bbc0c4"
    },
});

type GoogleButton= {
    title: React.ReactNode
}

const GoogleButton = (props: GoogleButton) => {
    const classes = useStyles();

    return (
        <ModalButton
            icon={<GTranslateIcon />}
            title={props.title}
            class={classes.button}
        />
    )
};

export default GoogleButton;