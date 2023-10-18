// eslint-disable-next-line react/prop-types
const Button = ({ clickHandler, disabled }) => {
  return (
    <button
      onClick={() => {
        clickHandler();
        disabled = { disabled };
      }}
    >
      Add To the list
    </button>
  );
};
export default Button;
// jab data send na karn ho : butoon onclick ={()=> clickHandler ()}  Add To the list{" "}
// parent know every thing now
