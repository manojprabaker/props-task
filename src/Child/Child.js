// import React from "react";

// const Child = (props1) =>{
//    // console.log(props);
//     const filterData=(para) =>{
//    const filterArray= props1.users.filter((e)=>e.id==3);
//         //console.log(filterArray);
//         //const ele=filterArray.map((e)=>{
//            // console.log(e.name,para);
//         //});
//         props1.getFilData(filterArray,para);
//     }

//     return(
//         <div>Child
//             <button onClick={()=> filterData({name:"manoj",age:26})}>Filter</button>
//         </div>

//     )
// }
// export default Child;

//import React, { useState } from "react";

// function Child(props) {
//   let temp = props.employees;
//   let [arr, setArr] = useState(temp);
//   console.log("arr", arr);
//   const update = (sal) => {
//     let tt = temp.filter((t) => t.salary < sal);
//     console.log(tt);
//     if (tt.length == 0) {
//     } else {
//       setArr(tt);
//     }
//   };

//   return (
//     <div>
//       Child
//       {arr.map((e, i) => {
//         return (
//           <div key={i}>
//             <h1>{e.name}</h1>
//             <h2>{e.salary}</h2>
//             <button onClick={() => update(e.salary)}>Update</button>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default Child;


import React from "react";

const Child = (props) => {
  var data = props.emp;
  console.log(data);
  
  return (
    <div>
      {data.map((value,i) => {
        return (
          <div key={i}>
            <h4>{value.id}</h4>
            <h2>{value.name}</h2>
            <p>{value.salary}</p>
            <button onClick={() => props.check(value)}>Check</button>
          </div>
        );
      })}
    </div>
  );
};

export default Child;
