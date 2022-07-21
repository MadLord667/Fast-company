import React from "react";
import Pagination from "./pagination";
import User from "./user";

const Users = ({ users, handleDelete, ...rest }) => {
  const count = users.length;
  const pageSize = 4;
  const handlePageChange = (pageIndex) => {
    console.log("page: ", pageIndex);
  };
  return (
    <>
      {count !== 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретились, раз</th>
              <th scope="col">Избранное</th>
              <th scope="col">оценка</th>
              <th scope="col">delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <User
                key={user._id}
                {...user}
                handleDelete={handleDelete}
                {...rest}
              />
            ))}
          </tbody>
        </table>
      ) : (
        ""
      )}
      <Pagination
        itemsCount={count}
        pageSize={pageSize}
        onPageChange={handlePageChange}
      />
      {/* 1, 2, 3 */}
      {/* users/pageSize */}
    </>
  );
};

export default Users;
