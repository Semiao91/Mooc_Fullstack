import React from "react";

function List(props) {
  return (
    <>
      <li>
        {props.name} {props.value} {props.symbol}
      </li>
    </>
  );
}

export default List;
