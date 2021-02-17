import React, {useCallback} from "react";
import {makeStyles} from "@material-ui/core";
import ArrowDrop from '@material-ui/icons/ArrowDropUp';
import Typography from "@material-ui/core/Typography";
import Actions from "./Actions";
import CardUser from "./CardUser";

const useStyles = makeStyles({
    container: {
        display: "flex",
        alignItems: "baseline"
    },
    vote: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginRight: "1rem"
    },
    post: {
        display: "flex",
        flexDirection: "column"
    },
    arrowDown: {
        transform: "rotate(180deg)"
    },
    arrow: {
        color: "grey",
        fontSize: "5rem"
    },
    voteSum: {
        fontSize: "1.4rem",
        color: "grey"
    },
})

const QuestionBody = () => {
    const classes = useStyles();

    const handleClickShare = useCallback(
        () => {

        },
        []
    );

    const handleClickEdit = useCallback(
        () => {

        },
        []
    );

    const handleClickFollow = useCallback(
        () => {

        },
        []
    );

    return (
        <div className={classes.container}>
            <div className={classes.vote}>
                <ArrowDrop className={classes.arrow}/>
                <Typography component="p" className={classes.voteSum}>22220</Typography>
                <ArrowDrop className={`${classes.arrow} ${classes.arrowDown}`}/>
            </div>
            <div className={classes.post}>
                <div>
                    Probably a basic question, but I couldn't find any example in the documentation. Using material-ui-next beta.30. I have the following:
                    And I want the mui.Paper content appear beneath the AppBar, and not hidden by it. Is there a component I'm missing somewhere?
                </div>
                <Actions
                    handleClickEdit={handleClickEdit}
                    handleClickFollow={handleClickFollow}
                    handleClickShare={handleClickShare}
                />
                <CardUser />
            </div>
        </div>
    )
};

export default QuestionBody;