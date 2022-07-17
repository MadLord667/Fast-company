import React, { useState } from "react";
import api from "../api";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (userId) => {
    // console.log(userId);
    setUsers(users.filter((user) => user._id !== userId));
  };

  const renderPhrse = (number) => {
    if (number === 2 || number === 3 || number === 4)
      return " человека тусанут";
    return " человек тусанёт";
  };

  const formatHeaderPhrase = () => {
    let classes = "badge ";
    return (classes += users.length === 0 ? "bg-danger" : "bg-primary");
  };

  return (
    <>
      <h1>
        <span className={formatHeaderPhrase()}>
          {users.length > 0
            ? `${users.length + renderPhrse(users.length)} с тобой сегодня`
            : "Никто с тобой не тусанёт"}
        </span>
      </h1>

      {users.length !== 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретились, раз</th>
              {/* <th scope="col">test</th> */}
              <th scope="col">оценка</th>
              <th scope="col">delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user._id}>
                  <td>{user.name}</td>

                  <td>
                    {user.qualities.map((qyalit) => (
                      <span
                        className={`badge text-bg-${qyalit.color} m-1`}
                        key={qyalit._id}
                      >
                        {qyalit.name}
                      </span>
                    ))}
                  </td>

                  <td>{user.profession.name}</td>

                  <td>{user.completedMeetings}</td>

                  <td>{user.rate}</td>

                  <td>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        ""
      )}
    </>
  );
};
export default Users;
