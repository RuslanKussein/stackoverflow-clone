import React from "react";
import Button from "../../Button";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    actions: {
        display: "flex",
        margin: "1rem 0",
        "& > button": {
            marginRight: "0.5rem"
        }
    }
})

type Actions = {
    handleClickShare: () => void;
    handleClickEdit: () => void;
    handleClickFollow: () => void;
}

const Actions = (props: Actions) => {
    const classes = useStyles();

    return (
        <div className={classes.actions}>
            <Button
                color="secondary"
                onClick={props.handleClickShare}
            >
                Share
            </Button>
            <Button
                color="secondary"
                onClick={props.handleClickEdit}
            >
                Edit
            </Button>
            <Button
                color="secondary"
                onClick={props.handleClickFollow}
            >
                Follow
            </Button>
        </div>
    )
};

export default Actions;