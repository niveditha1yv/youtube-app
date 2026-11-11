import Button from "./Button";

const buttonName = [
  "All",
  "Podcast",
  "Music",
  "Bigg Boss",
  "Kannada",
  "Hindi",
  "Tamil",
];
const ButtonList = () => {
  return (
    <div className="flex">
      {buttonName.map((name, id) => (
        <Button key={id} name={name} />
      ))}
    </div>
  );
};

export default ButtonList;
