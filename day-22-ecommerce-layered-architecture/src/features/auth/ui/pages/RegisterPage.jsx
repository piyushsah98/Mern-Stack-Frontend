import { Link, NavLink } from "react-router";
import useAuth from "../../hooks/useAuth";

const RegisterPage = () => {
  let { register, errors, handleSubmit, registerForm } = useAuth();

  return (
    <div className="min-h-screen bg-[#09090B] flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-2xl">
        <h1 className="text-3xl font-bold text-center text-white">
          Create Account
        </h1>

        <p className="mt-2 text-center text-zinc-400">Join us today</p>

        <form onSubmit={handleSubmit(registerForm)} className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm text-zinc-300">
              Full Name
            </label>

            <input
              {...register("name", {
                required: "name is required",
              })}
              type="text"
              placeholder="John Doe"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none placeholder:text-zinc-500 focus:border-blue-500"
            />
            {errors.name && (
              <p className="text-red-500 mt-2">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="mb-2 block text-sm text-zinc-300">Email</label>

            <input
              {...register("email", {
                required: "email is required",
              })}
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none placeholder:text-zinc-500 focus:border-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 mt-2">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="mb-2 block text-sm text-zinc-300">Password</label>

            <input
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 6,
                  message: "minimum 6 letters required",
                },
              })}
              type="password"
              placeholder="••••••••"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none placeholder:text-zinc-500 focus:border-blue-500"
            />
            {errors.password && (
              <p className="text-red-500 mt-2">{errors.password.message}</p>
            )}
          </div>

          <button className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">
            Create Account
          </button>
        </form>

        <p className="mt-6 text-center text-zinc-400">
          Already have an account?{" "}
          <NavLink
            to="/"
            className="font-medium text-blue-500 hover:text-blue-400"
          >
            Login
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
