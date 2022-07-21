import React from "react";

const BookMark = ({ status, ...rest }) => {
  return (
    <button
      {...rest}
      className={
        "bi bi-bookmark-plus" + (status ? "bi bi-bookmark-plus-fill" : "")
      }
    ></button>
  );
};

export default BookMark;

// ===============================

// const BookMark = ({ status, ...rest }) => {
//   if (status === false) {
//     return (
//       <button onClick={() => rest.bookMark(rest.id)}>
//         <span className="bi bi-bookmark-plus"></span>
//       </button>
//     );
//   } else if (status === true) {
//     return (
//       <button onClick={() => rest.bookMark(rest.id)}>
//         <span className="bi bi-bookmark-plus-fill"></span>
//       </button>
//     );
//   }
// };
