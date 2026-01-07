import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/bwnvydna", userInfo);
      toast.success("Your message has been sent");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div name="Contact">
      <div className="max-w-screen-2xl  dark:text-white dark:bg-black container mx-auto px-4 md:px-20 my-16">
        <h1 className="text-3xl font-bold mb-3">Contact me</h1>
        <span>Please fill out the form below to contact me</span>
        <div className="flex flex-col items-center justify-center mt-20">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-slate-200 w-90 px-8 py-6 rounded-xl"
          >
            <h1 className="text-xl font-semibold  dark:text-black  mb-4">
              Send your message
            </h1>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700" htmlFor="name">
                Full Name
              </label>
              <input
                id="name"
                className="shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-black"
                name="name"
                type="text"
                placeholder="Enter Your Full Name"
                {...register("name", { required: true })}
                required
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                {...register("email", { required: true })}
                id="email"
                className="shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-black"
                name="email"
                type="email"
                placeholder="Enter Your Email Address"
                required
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700" htmlFor="message">
                Message
              </label>
              <textarea
                {...register("message", { required: true })}
                id="message"
                className="shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-black"
                name="message"
                placeholder="Type your message here"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-black ml-10 text-white rounded-lg px-7 py-3 scale-90 hover:bg-slate-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
