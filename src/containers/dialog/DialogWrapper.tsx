import React from "react";
import {Dialog, DialogContent} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    dialogContent: {
        display: "flex",
        flexDirection: "column",
    },
});

type DialogWrapper = {
    children: React.ReactNode;
    open: boolean;
    onClose: () => void;
}

const DialogWrapper =  (props: DialogWrapper) => {
    const classes = useStyles();

    return (
        <Dialog open={props.open} onClose={props.onClose}>
            <DialogContent className={classes.dialogContent}>
                {props.children}
            </DialogContent>
        </Dialog>
    )
}

export default DialogWrapper;