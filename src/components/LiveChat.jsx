import { useEffect, useState } from "react";
import { ChatMessage } from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { liveMessage } from "../redux/chatSlice";
import { generateRandomName, randomMessage } from "../Utils/helper";

const LiveChat = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const chatData = useSelector((store) => store.chat.message);
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("API POLLIng");
      dispatch(
        liveMessage({
          name: generateRandomName(),
          text: randomMessage(20),
        }),
      );
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <div className="p-3 flex flex-col-reverse h-[600px] w-full border border-black bg-green-100 overflow-y-scroll">
        {chatData.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.text} />
        ))}
      </div>
      <form
        className="p-2 w-full border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            liveMessage({
              name: "Akash",
              text: text,
            }),
          );
          setText("");
        }}
      >
        <input
          className="w-[300px] border border-black"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="py-1 px-2 ml-2 bg-blue-400 rounded-md"
          onClick={(e) => {
            e.preventDefault();
            dispatch(
              liveMessage({
                name: "Akash",
                text: text,
              }),
            );
            setText("");
          }}
        >
          send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
