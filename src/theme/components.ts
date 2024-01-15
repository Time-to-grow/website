import { Components } from "@mui/material/styles";

export const components: Components = {
    MuiButton: {
        styleOverrides: {
            outlined: {
                borderRadius: "0px",
                borderWidth: "2px",
                "&:hover": {
                    borderWidth: "2px",
                },
            }
        }
    },
};