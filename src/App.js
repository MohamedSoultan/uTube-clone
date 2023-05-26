import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Navbar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
} from "./components";
import { Box } from "@mui/material";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Box sx={{ backgroundColor: "#000", color: "#fff" }}>
        <Routes>
          <Route exact path="/" element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
