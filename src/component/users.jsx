import React, { useState } from "react";
import Pagination from "./pagination";
import User from "./user";
import { paginate } from "./utils/paginate";
import GroupList from "./groupList";
import api from "../api";

const Users = ({ users, handleDelete, ...rest }) => {
    const count = users.length;
    const pageSize = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const [professions] = useState(api.professions.fetchAll());
    const handlePageChange = (pageIndex) => {
        console.log("page: ", pageIndex);
        setCurrentPage(pageIndex);
    };

    const handleProfessionSelect = (params) => {
        console.log(params);
    };
    console.log(professions);

    // const paginate = (items, pageNumber, pageSize) => {
    //   const startIndex = (pageNumber - 1) * pageSize;
    //   return [...items].splice(startIndex, pageSize);
    // }; // перенесли в paginate.js

    const userCrop = paginate(users, currentPage, pageSize);
    return (
        <>
            <GroupList
                items={professions}
                onItemSelect={handleProfessionSelect}
            />
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
                        {userCrop.map((user) => (
                            <User
                                key={user._id}
                                s
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
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </>
    );
};

export default Users;
