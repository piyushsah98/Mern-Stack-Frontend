import { Link, NavLink } from "react-router";
import { useAuth } from "../hooks/authHooks";

const LoginPage = () => {
  let { register, handleSubmit, loginForm, errors } = useAuth();
  return (
    <div className="min-h-screen bg-[#09090B] flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-2xl">
        <h1 className="text-3xl font-bold text-white text-center">
          Welcome Back
        </h1>

        <p className="mt-2 text-center text-zinc-400">Login to your account</p>

        <form onSubmit={handleSubmit(loginForm)} className="mt-8 space-y-5">
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

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-zinc-400">
              <input type="checkbox" />
              Remember me
            </label>

            <button type="button" className="text-blue-500 hover:text-blue-400">
              Forgot password?
            </button>
          </div>

          <button className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-zinc-400">
          Don't have an account?{" "}
          <NavLink
            to="/"
            className="font-medium text-blue-500 hover:text-blue-400"
          >
            Register
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
