import React, { useState } from "react"; // React
import Users from "./component/users"; // скелет (каркас)
import api from "./api"; //  визуальная часть

function App() {
  // Объявление новой переменной состояния "users"
  const [users, setUsers] = useState(api.users.fetchAll());
  const handleDelete = (userId) => {
    console.log(userId);
    // setUsers(users.filter((user) => user._id !== userId));
  }; // удаление
  const handleToggleBookMark = (id) => {}; // отмета переключения закладки
  return <div></div>;
}

export default App;
