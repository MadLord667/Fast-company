import React from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookmark";
// import userS from "../api/fake.api/user.api";

const User = ({
    name,
    _id,
    qualities,
    profession,
    completedMeetings,
    rate,
    bookmark,
    onToggleBookMark,
    handleDelete
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
                <BookMark
                    status={bookmark}
                    onClick={() => onToggleBookMark(_id)}
                />
            </td>

            <td>{rate} / 5</td>

            <td>
                <button
                    onClick={() => handleDelete(_id)}
                    className="btn btn-danger"
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default User;
