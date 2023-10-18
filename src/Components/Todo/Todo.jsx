// import { useState } from "react";
// import Button from "../Button/Button";
// import Input from "../Input/Input";
// import List from "../List/List";

// const Todo = () => {
//   const [item, setItem] = useState("");
//   // Bind This is a one way
//   // list ka data kahi toh save karna hoga na bhai ok i ll do that
//   const [list, setlist] = useState([]);
//   // test ko list m dalna input m item h
//   // const [list, setlist] = useState(["aa", "bb", "cc", "Pradeep Tokas"]);
//   // aary have list passing into pass compmt and show the list
//   return (
//     <>
//       <Input changeHandle={(data) => setItem(data)} value={item} />
//       <Button
//         clickHandler={() => {
//           //  need to copy of state hum real state m maodifaction ni kartey bcox imuatble:make a copy
//           const items = [...list];
//           items.push(item);
//           setlist(items);
//           setItem("");
//           disabled={!item.length};
//           // setItemList ([...list,item]) one line code
//         }}
//       >

//       </Button>
//       <List items={list} />
//       {/* Now want to clear list : throgh two way data binding  */}
//       {/* Now Emapty list not allowed now need to disable buution */}
// now space daal k save kar raha Trim in js space se end space rempv
// now enter the key enter se enter
// kon se component ko pata chalega user kon sa key press kiya hain

//       {/* <List item={list} /> */}
//     </>
//   );
// };
// export default Todo;

// // button click need to data from  item n push data into list need to copy of State real state m copy ni karty real state is mutable
// // uper array ko modified ni karsakat state is mutable no Change
import { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import List from "../List/List";

const Todo = () => {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  return (
    <>
      <Input changeHandle={(data) => setItem(data)} value={item} />
      <Button
        clickHandler={() => {
          const items = [...list];
          items.push(item);
          setList(items);
          setItem("");
        }}
        disabled={!item.length} // Pass the disabled prop here
      >
        Add To the list
      </Button>
      <List items={list} />
    </>
  );
};

export default Todo;
