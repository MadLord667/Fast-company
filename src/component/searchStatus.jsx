import React from "react";

const SearchStatus = ({ length }) => {
    // const { length } = props  //  аналог записи ({length})

    const headerStateChanges = (number) => {
        // Изменения состояния заголовка

        if (number === 2 || number === 3 || number === 4) {
            return " человека тусанут";
        } else {
            return " человек тусанёт";
        }
    };

    // const headerСolor = () => {
    //   // Изменения цвета заголовка

    //   let classes = "badge ";
    //   return (classes += length === 0 ? "bg-danger" : "bg-primary");
    // };

    return (
        <>
            <h1>
                <span
                    className={
                        "badge " + (length > 0 ? "bg-primary" : "bg-danger")
                    }
                >
                    {/* Изменения цвета заголовка, в связи с изменением состояния */}

                    {length > 0
                        ? `${
                              length + headerStateChanges(length)
                          } с тобой сегодня`
                        : "Никто с тобой не тусанёт"}
                </span>
            </h1>
        </>
    );
};

export default SearchStatus;
