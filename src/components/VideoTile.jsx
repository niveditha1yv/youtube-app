const VideoTile = ({ info }) => {
  //console.log("info", info);
  const { snippet, statistics } = info;
  const { thumbnails, title, channelTitle } = snippet;
  const { viewCount } = statistics;
  return (
    <div className="shadow-md p-1 mt-5 overflow-hidden bg-white cursor-pointer w-72">
      <img alt="video" src={thumbnails.medium.url} className="rounded-lg" />
      <ul className="p-3 items-center gap-1 text-gray-500">
        <li class="font-bold text-light-black text-sm pb-2">{title}</li>
        <li class="text-sm">{channelTitle}</li>
        <li class="text-xs mt-1">{viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoTile;
