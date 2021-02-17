import React from "react";
import {makeStyles, Card, CardContent} from "@material-ui/core";
import Question from "../containers/question/Question";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
    toolbar: {
        position: "relative",
        top: 60,
        height: "100%",
        width: "100%",
        border: "none"
    }
})

const QuestionsPage = () => {
    const classes = useStyles();

    return (
        <Card className={classes.toolbar}>
            <Grid container>
                <Grid xs={1} item/>
                <Grid xs={10} item>
                    <CardContent>
                        <Question />
                    </CardContent>
                </Grid>
                <Grid xs={1} item/>
            </Grid>
        </Card>
    )
};

export default QuestionsPage;