const Button = ({ name }) => {
  return (
    <div>
      <button className="py-2 px-5 ml-4 bg-gray-300 rounded-lg font-medium">
        {name}
      </button>
    </div>
  );
};

export default Button;
