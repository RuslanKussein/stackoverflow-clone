import React from "react"
import makeStyles from "@material-ui/core/styles/makeStyles";
import GitHubIcon from "@material-ui/icons/GitHub";
import ModalButton from "./ModalButton"

const useStyles = makeStyles({
    button: {
        background: "#000",
        color: "#fff",
        "&:hover": {
            background: "#2f3337"
        }
    },
});

type GithubButton= {
    title: React.ReactNode
}

const GithubButton = (props: GithubButton) => {
    const classes = useStyles();

    return (
        <ModalButton
            icon={<GitHubIcon />}
            title={props.title}
            class={classes.button}
        />
    )
};

export default GithubButton;