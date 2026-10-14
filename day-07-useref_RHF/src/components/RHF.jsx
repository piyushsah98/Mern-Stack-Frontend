import React from "react";
import { useForm } from "react-hook-form";

const RHF = () => {
  // This is we are doing with react-hook-form
  console.log("form rendering...");
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formSubmit = (data) => {
    console.log(data);
    reset();
  }

  return (
    <div className="p-4 bg-gray-700 rounded-md w-75">
      <form onSubmit={handleSubmit(formSubmit)} className="flex flex-col h-[90%] w-full gap-4" action="">
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Name</label>
          <input
          {...register('name', {required: true})}
            className="px-3 py-2 rounded-md border border-gray-300 w-full"
            type="text"
            placeholder="enter your name"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
          {...register('email' ,{required: true})}
            className="px-3 py-2 rounded-md border border-gray-300 w-full"
            type="email"
            placeholder="enter your email"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
          {...register('password', {required: true})}
            className="px-3 py-2 rounded-md border border-gray-300 w-full"
            type="password"
            placeholder="enter your password"
          />
        </div>
        <button className="w-full px-3 py-2 rounded-md bg-blue-500 mb-3">
          Register
        </button>
      </form>
    </div>
  );
};

export default RHF;
