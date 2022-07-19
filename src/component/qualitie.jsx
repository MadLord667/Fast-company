import React from "react";
const Qualitie = ({ color, name, _id }) => {
  <span className={`badge text-bg-${color} m-1`} key={_id}>
    {name}
  </span>;
};

export default Qualitie;
