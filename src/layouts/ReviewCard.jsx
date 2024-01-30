import React from "react";

const ReviewCard = (props) => {
  return (
    <div className=" w-full md:w-1/3 bg-white border-2 border-LightText md:border-none p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg ">
      <div>
        <p className="text-LightText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          temporibus sapiente delectus blanditiis laudantium vel optio at sequi
          unde praesentium. Aperiam rerum, excepturi a commodi est quo quis
          possimus temporibus laborum ipsum nostrum nesciunt autem ab, doloribus
          voluptatem, voluptate culpa.
        </p>
      </div>
      <div className=" flex flex-row justify-center items-center mt-4 gap-4">
        <img className=" rounded-full w-1/4" src={props.img} alt="" />
        <h3 className=" font-semibold ">{props.name}</h3>
      </div>
    </div>
  );
};

export default ReviewCard;
