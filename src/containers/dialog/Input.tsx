import React from "react";
import TextField from "@material-ui/core/TextField";

type Input = {
    label: string;
    style?: React.CSSProperties | undefined
}

const Input = (props: Input) => {
    return (
        <TextField label={props.label} variant="outlined" style={props.style}/>
    )
}

export default Input;