// eslint-disable-next-line react/prop-types
const Input = ({ changeHandle, value }) => {
  return (
    <input
      type="text"
      onChange={(e) => {
        changeHandle(e.target.value);
      }}
      value={value}
      onKeyUp={(e) => {
        if (e.key === "Enter") {
          console.log("Enter key pressed");
        }
      }}
      // this is event listener keydown keyup keep up daba chuka haik key board button
      // serch get the key from object in js
    />
  );
};
export default Input;
