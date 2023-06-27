// import React from 'react'
// import Child from '../Child/Child'

// let users = [
//     { id: 1, name: "Manoj" },
//     { id: 2, name: "Prabaker" },
//     { id: 3, name: "MJ" },
//   ];

//   //let getData=users.filter((e)=>e.id===3);

// const Parent = () => {
//     const getFilData=(data,datas) =>{
//       const ele=data.map((e)=>{
//         console.log(e.name,datas);
//     });
//    // console.log(ele);
//     }
//   return (
//     <div>Parent
//   <Child users={users} getFilData={getFilData}/>
//    </div>
//   )
// }

// export default Parent

//import React from "react";
//import Child from "../Child/Child";

// function Parent() {
//   let employees = [
//     { id: 11, name: "Abhinav", salary: 75000 },
//     { id: 2131, name: "Gaurav", salary: 62000 },
//     { id: 3012, name: "Raj", salary: 32000 },
//   ];

//   return (
//     <div>
//       Parent
//       <Child  employees={employees}/>
//     </div>
//   );
// }

// export default Parent;
import React, { useState } from "react";
import Child from "../Child/Child";

const Parent = () => {
  let employees = [
    { id: 11, name: "Abhinav", salary: 75000 },
    { id: 2131, name: "Gaurav", salary: 62000 },
    { id: 3012, name: "Raj", salary: 32000 },
  ];
  const [updateObj, setUpdateObj] = useState([]);
  let checkSalary = (a) => {
    console.log(a);
    var x = employees.filter((det) => {
      return det.salary < a.salary;
    });
    console.log(x);
    setUpdateObj(x);
  };
  return (
    <div>
      <Child emp={employees} check={checkSalary} />
      {updateObj.map((value,i) => {
        return (
          <div key={i}>
            <h2>{value.name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Parent;
