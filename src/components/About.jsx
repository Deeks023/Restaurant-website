import React from "react";
import img from "../assets/img/about.png";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
      <img src={img} alt="img" />
      <div className=" space-y-4 lg:pt-14">
        <h1 className=" font-semibold text-4xl text-center md:text-start">
          Why Choose Us?
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero dolorem
          quisquam cum quod accusantium aspernatur optio explicabo unde quo
          earum officia, distinctio, magnam consequatur, voluptates laudantium
          voluptatibus error! Impedit odio quaerat molestias eius quidem fuga
          amet tenetur ad corporis. Cum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, et!
          Dolores cupiditate eius natus. Reiciendis asperiores nisi iure
          excepturi facilis officia ipsam dolores. Officia quia incidunt
          repellat, veritatis voluptates amet!
        </p>
        <div className=" flex justify-center lg:justify-start">
          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default About;
