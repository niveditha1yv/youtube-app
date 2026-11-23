export const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex text-center gap-2 ">
      <img
        className="w-9 h-9 col-span-1 rounded-md"
        alt="icon"
        src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"
      />
      <span className="my-2 font-bold text-md">{name}</span>
      <span className="my-2">{message}</span>
    </div>
  );
};
