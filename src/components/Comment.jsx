const Comment = ({ data }) => {
  //const { snippet } = data;

  const { name, message } = data;
  // console.log(authorDisplayName);

  return (
    <div className="flex mt-2 bg-gray-200 shadow-sm p-2 rounded-md">
      <img
        className="w-12 h-12 col-span-1"
        alt="icon"
        src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"
      />
      <div className="flex flex-col ml-2">
        <div className="px-2 font-bold text-[14px]">
          {name} <span className="font-light text-[10px]"> 4 hours ago</span>
        </div>
        <div className="px-2 text-sm">{message}</div>
      </div>
    </div>
  );
};

export default Comment;
