// import {useState} from 'react'

// const NewList = (props) => {
//     const [enteredDate, setEnteredDate] = useState("");
//   const [enteredTitle, setEnteredTitle] = useState("");
//   const [enteredeDes, setEnteredeDes] = useState("");
//   const [enteredDueDate, setEnteredDueDate] = useState("");
//   const [enteredeTags, setEnteredTags] = useState("");
//   const [status, setStatus] = useState("");

//   const dateHandler = (e) => {
//     setEnteredDate(e.target.value);
//   };
//   const titleHandler = (e) => {
//     setEnteredTitle(e.target.value);
//   };
//   const desHandler = (e) => {
//     setEnteredeDes(e.target.value);
//   };
//   const dueDateHandler = (e) => {
//     setEnteredDueDate(e.target.value);
//   };
//   const tagHandler = (e) => {
//     setEnteredTags(e.target.value);
//   };
//   const statusHandler = (e) => {
//     setStatus(e.target.value);
//   };

//   const submitHandler = (e) => {
//     e.preventDefault();
//     const todolistData = {
//       Date: new Date(enteredDate),
//       Title: enteredTitle,
//       Description: enteredeDes,
//       DueDate: enteredDueDate,
//       Tags: enteredeTags,
//       status: status,
//     };

//     console.table(todolistData);
//   };

//   props.onAdd(todolistData)

  
//   return (
//     <form onSubmit={submitHandler}>
//         <label>
//           Date
//           <input type="date" value={enteredDate} onChange={dateHandler} />
//         </label>
//         <label>
//           Title
//           <input type="text" value={enteredTitle} onChange={titleHandler} />
//         </label>
//         <label>
//           Description
//           <input type="text" value={enteredeDes} onChange={desHandler} />
//         </label>
//         <label>
//           due Date
//           <input type="date" value={enteredDueDate} onChange={dueDateHandler} />
//         </label>
//         <label>
//           Tags
//           <input type="text" value={enteredeTags} onChange={tagHandler} />
//         </label>
//         <label>
//           Status
//           <input type="text" value={status} onChange={statusHandler} />
//         </label>

//         <button type="submit"> submit</button>
//       </form>
//   )
// }

// export default NewList