import { useEffect, useState } from "react";
import { YOUTUBE_API } from "../Utils/constants";
import VideoTile from "./VideoTile";
import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
//import { getvideosData } from "../redux/videoSlice";

const VideoContainer = () => {
  const [videos, setVideos] = useState(null);
  // const dispatch = useDispatch();
  // const videos = useSelector((store) => store.videos?.data);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    //console.log("json", json);
    setVideos(json.items);
    // dispatch(getvideosData(json.items));
  };

  useEffect(() => {
    getVideos();
  }, []);

  // if (videos) {
  //   console.log("videos", videos);
  // }
  // console.log("videos", videos);
  return (
    <div className="flex flex-wrap gap-1">
      {videos?.map((data) => (
        <Link to={"/watch?v=" + data.id}>
          <VideoTile key={data.id} info={data} />{" "}
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
