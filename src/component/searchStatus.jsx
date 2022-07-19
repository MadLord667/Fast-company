import React, { useState } from "react";

const SearchStatus = ({ length }) => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const headerStateChanges = (number) => {
    // Изменения состояния заголовка

    if (number === 2 || number === 3 || number === 4)
      return " человека тусанут";
    return " человек тусанёт";
  };

  const headerСolor = (id) => {
    // Изменения цвета заголовка

    let classes = "badge ";
    return (classes += id.length === 0 ? "bg-danger" : "bg-primary");
  };
};

return (
  <>
    <span className={headerСolor()}>
      {users.length > 0
        ? `${users.length + headerStateChanges(users.length)} с тобой сегодня`
        : "Никто с тобой не тусанёт"}
    </span>
  </>
);

export default SearchStatus;
