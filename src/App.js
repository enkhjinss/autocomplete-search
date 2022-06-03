import { Autocomplete, Box, TextField } from "@mui/material";
import { useState } from "react";
import namedColors from "color-name-list";

const App = () => {
    const colors = namedColors.slice(0, 5000);
    const [value, setValue] = useState();

    return (
        <Box
            style={styles.box1}
            sx={{
                background: `radial-gradient(circle, ${value} 0%, rgba(252,70,107,1) 100%)`,
            }}
        >
            <Autocomplete
                multiple={true}
                getOptionLabel={(colors) => `${colors.name}`}
                options={colors}
                onChange={(_, newValue) => {
                    setValue(newValue);
                }}
                renderInput={(params) => (
                    <TextField
                        variant="standard"
                        placeholder="text"
                        {...params}
                    />
                )}
                renderOption={(props, colors) => (
                    <Box component="li" {...props}>
                        {colors.name}
                    </Box>
                )}
                style={styles.input}
            />
        </Box>
    );
};

const styles = {
    box1: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "green",
    },
    input: {
        width: "30%",
        color: "white",
    },
};

export default App;
