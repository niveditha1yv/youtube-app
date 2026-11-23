import Comment from "./Comment";

const CommentData = [
  {
    name: "Neetha",
    message: "React Course for learning and understanding",
    replies: [
      {
        name: "Neetha",
        message: "React Course",
        replies: [
          {
            name: "Neetha",
            message: "React Course for learning and understanding",
            replies: [
              {
                name: "Neetha",
                message: "React Course for learning ",
              },
              {
                name: "Neetha",
                message: "React Course for understanding",
              },
            ],
          },
          {
            name: "Neetha",
            message: "React Course for learning and understanding",
          },
        ],
      },
      {
        name: "Neetha",
        message: "React Course g",
      },
      {
        name: "Neetha",
        message: "React Course for ",
      },
    ],
  },
  {
    name: "Neetha",
    message: "React Course for learning and understanding",
    replies: [
      {
        name: "Neetha",
        message: "React Course for learning and understanding",
      },
      {
        name: "Neetha",
        message: "React Course for learning and understanding",
      },
    ],
  },
  {
    name: "Neetha",
    message: "React Course for learning and understanding",
  },
  {
    name: "Neetha",
    message: "React Course for learning and understanding",
  },
  {
    name: "Neetha",
    message: "React Course for learning and understanding",
  },
  {
    name: "Neetha",
    message: "React Course for learning and understanding",
  },
];

const CommentList = ({ comments }) => {
  return (
    <>
      {comments.map((cData, i) => (
        <div key={i}>
          <Comment data={cData} />
          <div className="pl-5 border border-l-black ml-5">
            {cData.replies && <CommentList comments={cData.replies} />}
          </div>
        </div>
      ))}
    </>
  );
};
const CommentContainer = () => {
  // const [comment, setComment] = useState([]);

  // useEffect(() => {
  //   let ignore = false;
  //   const getCommentsData = async () => {
  //     const data = await fetch(VIEDIO_COMMENTS_API);
  //     const json = await data.json();
  //     if (!ignore) {
  //       setComment(json.items);
  //     }
  //   };
  //   getCommentsData();
  //   return () => {
  //     ignore = true;
  //   };
  // }, []);
  return (
    <div className="m-2 p-2">
      <h1 className="text-xl font-bold">Comments: </h1>
      <CommentList comments={CommentData} />
    </div>
  );
};

export default CommentContainer;
