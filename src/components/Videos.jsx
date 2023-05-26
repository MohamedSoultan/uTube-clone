import { Stack, Box } from "@mui/material";

import { VideoCard, ChannelCard, Loader } from "./";
const Videos = ({ videos }) => {
  if (!videos?.length) return <Loader />;

  return (
    <Stack
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="flex-start"
      gap={2}
    >
      {videos.map((video, idx) => (
        <Box key={idx}>
          {video.id.videoId && <VideoCard video={video} />}
          {video.id.channelId && <ChannelCard channelDetail={video} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
