import React from "react";
import Typography from "@material-ui/core/Typography";
import AdditionalInformation from "./AdditionalInformation";

const QuestionHeader = () => {
    return (
        <div>
            <Typography paragraph variant='h4'>Duplicate identifier 'LibraryManagedAtributes'</Typography>
            <AdditionalInformation title="Asked" body="2 years, 5 months ago"/>
            <AdditionalInformation title="Active" body="yesterday"/>
            <AdditionalInformation title="Viewed" body="35k times"/>
        </div>
    )
};

export default QuestionHeader;