export default function Login() {
  return (
    <>
      <div className="main-container min-h-screen text-black dark:text-white-dark">
        <div
          className="flex min-h-screen items-center justify-center bg-[url('/images/map.svg')] bg-cover bg-center 
        dark:bg-[url('/images/map-dark.svg')]"
        >
          <div className="panel m-6 w-full max-w-lg sm:w-[480px]">
            <h2 className="mb-3 text-2xl font-bold">Sign In</h2>
            <p className="mb-7">Enter your email and password to login</p>
            <form className="space-y-5">
              <div>
                <label for="email">Email</label>
                <input
                  id="email"
                  type="email"
                  className="form-input"
                  placeholder="Enter Email"
                />
              </div>
              <div>
                <label for="password">Password</label>
                <input
                  id="password"
                  type="password"
                  className="form-input"
                  placeholder="Enter Password"
                />
              </div>
              <div>
                <label className="cursor-pointer">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="text-white-dark">
                    Subscribe to weekly newsletter
                  </span>
                </label>
              </div>
              <button type="submit" className="btn btn-primary w-full">
                SIGN IN
              </button>
            </form>
            <div className="relative my-7 h-5 text-center before:absolute before:inset-0 before:m-auto before:h-[1px] before:w-full before:bg-[#ebedf2] dark:before:bg-[#253b5c]">
              <div className="relative z-[1] inline-block bg-white px-2 font-bold text-white-dark dark:bg-[#0e1726]">
                <span>OR</span>
              </div>
            </div>
            <ul className="mb-5 flex justify-center gap-2 sm:gap-5">
              <li>
                <button
                  type="button"
                  className="btn flex gap-1 bg-white-dark/30 text-black shadow-none hover:bg-white dark:border-[#253b5c] dark:bg-transparent dark:text-white dark:hover:bg-[#1b2e4b] sm:gap-2"
                >
                  Google
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="btn flex gap-1 bg-white-dark/30 text-black shadow-none hover:bg-white dark:border-[#253b5c] dark:bg-transparent dark:text-white dark:hover:bg-[#1b2e4b] sm:gap-2"
                >
                  Github
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="btn flex gap-1 bg-white-dark/30 text-black shadow-none hover:bg-white dark:border-[#253b5c] dark:bg-transparent dark:text-white dark:hover:bg-[#1b2e4b] sm:gap-2"
                >
                  Twitter
                </button>
              </li>
            </ul>
            <p className="text-center">
              Dont't have an account ?{" "}
              <a
                href="auth-boxed-signup.html"
                className="font-bold text-primary hover:underline"
              >
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
