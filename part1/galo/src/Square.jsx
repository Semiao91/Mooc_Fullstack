import React, {useState} from "react";

function Square({value, onClick}) {
  return (
    <button onClick={onClick} className="square">
      {value}
    </button>
  );
}

export default Square;
