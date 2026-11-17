const VideoTile = ({ info }) => {
  console.log("info", info);
  const { snippet, statistics } = info;
  const { thumbnails, channelTitle } = snippet;
  const { viewCount } = statistics;
  return (
    <div className="shadow-md p-1 mt-5 w-fit  overflow-hidden bg-white cursor-pointer">
      <img
        alt="video"
        src={thumbnails.medium.url}
        className="w-auto rounded-lg"
      />
      <div className="p-3 items-center gap-1  text-gray-500">
        <p class="text-sm">{channelTitle}</p>
        <p class="text-xs mt-1">{viewCount} views</p>
      </div>
    </div>
  );
};

export default VideoTile;
