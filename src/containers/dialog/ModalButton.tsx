import React from "react";
import {Button} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    button: {
        margin: "0.5rem 0",
        padding: "0.5rem 3rem"
    },
});

type ModalButton= {
    /**className for Button*/
    class?: string,
    /**icon Component*/
    icon?: React.ReactNode,
    /**title of the Button*/
    title: React.ReactNode
}

const ModalButton = (props: ModalButton) => {
    const classes = useStyles();

    return (
        <Button className={`${classes.button} ${props.class}`}>
            {props.icon}
            {props.title}
        </Button>
    )
}

export default ModalButton;