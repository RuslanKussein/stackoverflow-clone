import React from "react";
import MuiButton from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    primary: {
        marginLeft: "0.3rem",
        backgroundColor: "#0095ff",
        color: "#fff",
        borderColor: "transparent",
        "&:hover": {
            background: "#0077cc"
        }
    },
    secondary: {
        backgroundColor: "#e1ecf4",
        color: "#39739d",
        borderColor: "#7aa7c7",
        "&:hover": {
            background: "#b3d3ea"
        }
    },
})

type Button = {
    color: 'primary' | 'secondary';
    onClick: () => void;
    children?: React.ReactNode;
    className?: string;
}

const Button = (props: Button) => {
    const classes = useStyles();

    return (
        <MuiButton
            variant="outlined"
            className={`${classes[props.color]} ${props.className}`}
            onClick={props.onClick}
        >
            {props.children}
        </MuiButton>
    )
}

export default Button;