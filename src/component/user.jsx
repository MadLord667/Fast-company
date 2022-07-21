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
  bookMark,
  onToggleBookMark,
  handleDelete,
}) => {
  return (
    <tr>
      <td>{name}</td>

      <td>
        {qualities.map((qyalit) => (
          <Qualitie key={qyalit._id} {...qyalit} />
        ))}
      </td>

      <td>{profession.name}</td>

      <td>{completedMeetings}</td>

      <td>
        <BookMark status={bookMark} onClick={() => onToggleBookMark(_id)} />
      </td>

      <td>{rate} / 5</td>

      <td>
        <button onClick={() => handleDelete(_id)} className="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default User;
