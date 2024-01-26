import { JSX } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { SectionTypes } from "@/types";

const Column = (props: SectionTypes): JSX.Element => {
    const { contentEntry, id } = props;

    return (
        <>
            {contentEntry && (
                <Box id={id}>
                    <Typography
                        id="sectionHeadline"
                        align="center"
                        gutterBottom
                        variant="h2">
                        {contentEntry.fields.headline}
                    </Typography>
                </Box>
            )}
        </>
    );
};

export default Column;
