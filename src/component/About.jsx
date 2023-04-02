import React from "react";
import PropTypes from "prop-types";

const About = (props) => {
  return (
    <div name='about' class="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
          </div>

          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>Hi, I am Jideobi Chebem nice to meet you take a look around</p>
            </div>
            <div>
              <p>I am passionate about building excellent 
              software that improves the lives of those around me.
              I specilaize in creating software for clients ranging
               from individuals and small-bussiness all the way to a large 
               enterprise corporations. What would you do if you had a software expert
               at your fingertips?
              </p>
            </div>
          </div>

        </div>
    </div>
  );
};

About.propTypes = {};

export default About;
