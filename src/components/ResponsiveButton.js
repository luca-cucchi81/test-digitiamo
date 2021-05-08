import React from "react";
import { IconButton, useMediaQuery } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import { useTheme } from "@material-ui/core/styles";

function ResponsiveButton() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    if (isSmallScreen) {
        return (
            <IconButton color="primary">
                <SearchIcon />
            </IconButton>
        );
    }

    return (
        <Button variant="contained" color="primary">
            Send
        </Button>
    );
}

export default ResponsiveButton;
