import { useSelector } from "react-redux";

const SideBar = () => {
  const isMenuItem = useSelector((store) => store.sidebar?.isToggle);
  if (!isMenuItem) return null;

  return (
    <div className="col-span-1 bg-white shadow-lg p-2 text-xl font-medium">
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>
          Subscription <span>{">"}</span>
        </li>
        <ul className="ml-4 text-lg font-light">
          <li>History</li>
          <li>Playlist</li>
          <li>Watch Later</li>
          <li>Your Videos</li>
        </ul>
        <li>
          You <span>{">"}</span>
        </li>
        <ul className="ml-4 text-lg font-light">
          <li>History</li>
          <li>Playlist</li>
          <li>Watch Later</li>
          <li>Your Videos</li>
        </ul>
      </ul>
    </div>
  );
};

export default SideBar;
