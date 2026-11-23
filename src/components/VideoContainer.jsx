import { useEffect, useState } from "react";
import { YOUTUBE_API } from "../Utils/constants";
import VideoTile from "./VideoTile";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { videosData } from "../redux/videoSlice";
//import { getvideosData } from "../redux/videoSlice";

const VideoContainer = () => {
  const [videos, setVideos] = useState(null);
  const dispatch = useDispatch();
  const videoData = useSelector((store) => store.videos.data);
  // const getVideos = async () => {
  //   const data = await fetch(YOUTUBE_API);
  //   const json = await data.json();
  //   //console.log("json", json);
  //   setVideos(json.items);
  //   // dispatch(getvideosData(json.items));
  // };

  // useEffect(() => {
  //   getVideos();
  // }, []);

  useEffect(() => {
    let ignore = false;

    async function fetchVideos() {
      const response = await fetch(YOUTUBE_API); // replace with your actual fetch call
      const data = await response.json();

      if (!ignore) {
        dispatch(videosData(data.items));
        setVideos(data.items);
      }
    }

    fetchVideos();

    return () => {
      ignore = true;
    };
  }, []);

  // console.log("videoData", videoData);
  console.log("videos", videos);
  return (
    <div className="flex flex-wrap gap-1">
      {videoData?.map((data) => (
        <Link key={data.id} to={"/watch?v=" + data.id}>
          <VideoTile info={data} />{" "}
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
