import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

import { Videos, Loader } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";
const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  useEffect(() => {
    // setVideos(null);
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);
  if (!videos?.length) return <Loader />;

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography style={{ fontSize: "48px", marginLeft: "24px" }}>
        Search Results for:
        <span style={{ color: "#F31503", fontWeight: "bold" }}>
          {searchTerm}
        </span>{" "}
        videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
