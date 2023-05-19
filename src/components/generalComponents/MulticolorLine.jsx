import React from "react";

const MulticolorLine = () => {
  return (
    <>
      <div
        style={{
          height: "3px",
          width: "100%",
          background:
            "linear-gradient(to right, mediumblue 10%, red 30%, yellow 60%, cyan 90%, orange 100%, green 60%, forestgreen 100%)",
        }}
      ></div>
    </>
  );
};

export default MulticolorLine;
