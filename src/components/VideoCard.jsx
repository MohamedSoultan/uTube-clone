import { Link } from "react-router-dom";

import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
  demoProfilePicture,
} from "../utils/constants";
const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "358px", md: "320px" },
        borderRadius: 0,
        boxShadow: "none",
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url || "lodaing... "}
          alt={snippet?.title}
          sx={{
            width: {
              xs: "100%",
              sm: "358px",
              md: "320px",
            },
            height: 180,
          }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: 80 }}>
        <Link to={videoId ? `/video/${videoId}` : demoChannelUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#fff">
            {`${snippet?.title.slice(0, 57)}...` || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/video/${snippet?.channelId}`
              : demoProfilePicture
          }
        >
          <Typography
            variant="subtitle2"
            color="gray"
            sx={{ display: "flex", alignItems: "center", gap: "5px" }}
          >
            {snippet?.channelTitle.slice(0, 57) ||
              demoChannelTitle.slice(0, 60)}
            <CheckCircle sx={{ height: 18 }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
