import React from "react";
import { useRef } from "react";

const Register = () => {
    // This is we are doing with useRef
    console.log('Form rendering...')
    const inpRef = useRef({});

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inpRef.current.name.value)
        console.log(inpRef.current.email.value)
        console.log(inpRef.current.password.value)
    }
    return (
        <div className="p-4 bg-gray-700 rounded-md w-75">
            <form onSubmit={handleSubmit} className="flex flex-col h-[90%] w-full gap-4" action="">
                <div className="flex flex-col gap-2">
                    <label htmlFor="name">Name</label>
                    <input
                        ref={e => inpRef.current.name = e}
                        className="px-3 py-2 rounded-md border border-gray-300 w-full"
                        type="text"
                        placeholder="enter your name"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="email">Email</label>
                    <input
                        ref={e => inpRef.current.email = e}
                        className="px-3 py-2 rounded-md border border-gray-300 w-full"
                        type="email"
                        placeholder="enter your email"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="password">Password</label>
                    <input
                        ref={e => inpRef.current.password = e}
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

export default Register;
