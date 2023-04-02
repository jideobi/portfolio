import React from "react";

const Contact = () => {
  return (
    <div name="contact" className="w-full  bg-[#0a192f] flex justify-center items-center pt-[100px] p-4">
      <form method="POST" action="https://getform.io/f/e3ea557c-37a2-4efc-a726-f5cb25ce8af8" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">Contact</p>
          <p className="text-gray-300 py-4">// Submit the form below or shoot me an email - jideobichebem@gmail.com</p>
        </div>
        <input className="p-2 bg-[#ccd6f6]" type='text' placeholder="Name" name="name" />
        <input className="my-4 p-2 bg-[#ccd6f6]" type='text' placeholder="Email" name="name" />
        <textarea className="p-2 bg-[#ccd6f6]" name='message' rows='10' placeholder="Message"></textarea>
        <button className="text-white border-2 hover:bg-pink-600 px-4 py-3 my-8 mx-auto flex items-center">Let's Collaborate</button>
      </form>
    </div>
  );
};

export default Contact;
