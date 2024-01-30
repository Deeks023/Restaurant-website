import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className=" px-6 py-1 border-2 border-brightColor text-brightColor hover:text-white hover:bg-brightColor transition-all rounded-full">
        {props.title}
      </button>
    </div>
  );
};

export default Button;
