/* eslint-disable react/prop-types */
const List = ({ items }) => {
  const listItems = items.map((item, index) => <li key={index}> {item}</li>);
  // index kaise milega using map 2nd arument,order maintain hoga phele toh phela not 3rd is first

  return (
    // items ={["aa", "bb", "cc"]} get and show the list ==> [<li key={0}>aa</li><li key={2}>,<>aa</>li,<>aa</>li]
    // if send any data use this VVVI concept convert into jsx...ract is smartenough to render the data which is in jsx format.
    //Missing "key" prop for element in iteratoreslintreact/jsx-key
    // (parameter) item: any : jab aap aary of jsx banaty ho react bolta ek req prop send kro elemnt m sath key k sath unique value index
    <ul>{listItems}</ul>
  );
};
export default List;
