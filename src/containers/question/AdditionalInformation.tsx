import React from "react";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core";

type AdditionalInformation = {
    title: string;
    body: string;
}

const useStyles = makeStyles({
    container: {
        display: "inline-flex",
        marginRight: "1rem"
    },
    title: {
        marginRight: "0.5rem",
        color: "grey"
    },
})

const AdditionalInformation = (props: AdditionalInformation) => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Typography className={classes.title}>{props.title}</Typography>
            <Typography>{props.body}</Typography>
        </div>
    )
};

export default AdditionalInformation;