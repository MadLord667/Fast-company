import React from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookmark";

const User = ({
  name,
  _id,
  qualities,
  profession,
  completedMeetings,
  rate,
  BookMark,
  handleDelete,
}) => {
  return (
    <tr>
      <td>{name}</td>

      <td>
        {qualities.map((qyalit) => (
          <Qualitie key={qyalit._id} {...qyalit} />
          //   <span
          //     className={`badge text-bg--${qyalit.color} m-1`}
          //     key={qualit._id}
          //   >
          //     {qyalit.name}
          //   </span>
        ))}
      </td>

      <td>{profession.name}</td>

      <td>{completedMeetings}</td>

      <td>
        <button>
          {
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-bookmark-plus"
              viewBox="0 0 16 16"
            >
              <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
              <path d="M8 4a.5.5 0 0 1 .5.5V6H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V7H6a.5.5 0 0 1 0-1h1.5V4.5A.5.5 0 0 1 8 4z" />
            </svg>
          }
        </button>
      </td>

      <td>{rate}</td>

      <td>
        <button onClick={() => handleDelete(_id)} className="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default User;
