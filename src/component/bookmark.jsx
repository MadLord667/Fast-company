import React from "react";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";

const BookMark = ({ status, ...rest }) => {
    return (
        <button
            {...rest}
            className={
                "bi bi-bookmark-plus" +
                (status ? "bi bi-bookmark-plus-fill" : "")
            }
        ></button>
    );
};

export default BookMark;
