const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-[25vw] mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gradient-to-br from-ctp-mantle to-ctp-crust outline outline-ctp-pink">
        <h2 className="text-3xl font-semibold text-center text-ctp-text">
          SignUp{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-ctp-pink to-ctp-mauve">
            Chat App
          </span>
        </h2>

        <form className="mt-5">
          <div className="">
            <label htmlFor="fullname" className="label">
              Full name
            </label>
            <input
              id="fullname"
              type="text"
              placeholder="Enter your full name"
              className="input input-bordered w-full"
            />
          </div>
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
          <div className="">
            <label htmlFor="confirmPassword" className="label">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Enter your password again"
              className="input input-bordered w-full"
            />
          </div>
          <div className="mt-3 flex items-center gap-5">
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="male"
                name="gender"
                className="radio"
                value="male"
                checked
              />
              <label htmlFor="male">Male</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="female"
                name="gender"
                className="radio"
                value="female"
              />
              <label htmlFor="female">Female</label>
            </div>
          </div>
          <button className="btn bg-gradient-to-r from-ctp-pink to-ctp-mauve w-full mt-5 text-ctp-base text-xl">
            SignUp
          </button>
        </form>
        <p className="mt-5 text-center">
          Already have an account?{" "}
          <a href="/login" className="text-ctp-pink">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
