import React from "react";
import {makeStyles} from "@material-ui/core";
import AdditionalInformation from "../AdditionalInformation";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    container: {
        alignSelf: "flex-end",
        minWidth: "250px",
    },
    avatarContainer: {
        display: "flex",
    },
    avatarName: {
        fontWeight: "bold",
        marginLeft: "0.5rem"
    }
})

const CardUser = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <AdditionalInformation title="answered" body="Feb 11'20 at 12:55"/>
            <div className={classes.avatarContainer}>
                <img src={process.env.PUBLIC_URL + "/girl-avatar.jpg"} alt="avatar" width={40} height={40}/>
                <Typography color="secondary" component="p" className={classes.avatarName}>Jeff Tian</Typography>
            </div>
        </div>
    )
};

export default CardUser;