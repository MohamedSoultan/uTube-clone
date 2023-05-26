import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { Sidebar, Videos, Loader } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
const Feed = () => {
  const [selectedCat, setSelectedCat] = useState("New");
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    // setVideos(null);
    fetchFromAPI(`search?part=snippet&q=${selectedCat}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCat]);

  if (!videos?.length)  <Loader />;

  return (
    <Stack sx={{ flexDirection: { sm: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sm: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar selectedCat={selectedCat} setSelectedCat={setSelectedCat} />

        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright Utube 2023
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography style={{ fontSize: "48px", marginLeft: "24px" }}>
          {selectedCat}
          <span style={{ color: "#F31503", fontWeight: "bold" }}> videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
