import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    card: {
        boxShadow: "0px 0px 14px -4px #000000",
        margin: "1rem 0"
    },
    cardContent: {
        display: "flex",
        flexDirection: "column",
    },
})

const FormWrapper: React.FC = (props) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
                {props.children}
            </CardContent>
        </Card>
    )
};

export default FormWrapper;