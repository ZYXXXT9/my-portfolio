import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="bg-[#0a192f] text-gray-300 w-full min-h-screen flex flex-col justify-center items-center"
    >
      <div className="max-w-[1000px] mx-auto p-4  h-full w-full">
        <form
          className="flex flex-col max-w-[600px] w-full"
          action="https://getform.io/f/avrerwwa"
          method="POST"
        >
          <div className="pb-8 text-gray-300">
            <p className=" text-4xl font-bold border-b-4 inline border-[#2ebfa5] text-gray-300">
              Contact
            </p>
            <p className="py-4 mt-8">Get in touch!</p>
          </div>
          <input
            className="p-4 text-gray-900 outline-none rounded"
            type="text"
            name="name"
            placeholder="Name"
            required
          />
          <input
            className="my-4 p-4 text-gray-900 outline-none  rounded"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <textarea
            className="p-4 text-gray-900 outline-none rounded"
            name="message"
            rows="6"
            placeholder="Message"
            required
          />
          <button className="group text-white border-2 px-4 py-3 hover:bg-[#2ebfa5] my-8 duration-700 font-bold w-[150px] outline-none">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
