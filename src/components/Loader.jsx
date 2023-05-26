import React, { useEffect } from "react";
import { Box, CircularProgress, Stack } from "@mui/material";

const Loader = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("This will run after 1 second!");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <Box minHeight="95vh">
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        height="80vh"
      >
        <CircularProgress
          sx={{
            mr: "10px",
            fontSize: "24px",
            fontWeight: "bold",
            letterSpacing: "2px",
          }}
        />
        Check your connection...
        <br />
        Or daily API requests are over <br />
        if you have some issue or suggestion contact me via :{" "}
        <a href="https://www.linkedin.com/in/mohamed-sultan-7a983a206/">
          linkdin
        </a>
      </Stack>
    </Box>
  );
};
export default Loader;
