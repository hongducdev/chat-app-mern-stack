const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-[25vw] mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gradient-to-br from-ctp-mantle to-ctp-crust outline outline-ctp-pink">
        <h2 className="text-3xl font-semibold text-center text-ctp-text">
          Login{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-ctp-pink to-ctp-mauve">
            Chat App
          </span>
        </h2>

        <form className="mt-5">
          <div className="">
            <label htmlFor="username" className="label">
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Enter your username"
              className="input input-bordered w-full"
            />
          </div>
          <div className="">
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
            />
          </div>
          <button className="btn bg-gradient-to-r from-ctp-pink to-ctp-mauve w-full mt-5 text-ctp-base text-xl">
            Login
          </button>
        </form>
        <p className="mt-5 text-center">
          Don&apos;t have an account?{" "}
          <a href="#" className="text-ctp-pink">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
