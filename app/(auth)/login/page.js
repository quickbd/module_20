"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

export default function Login() {
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("Teat@quickbd.net");
  const [loading, setLoading] = useState(false);

  let session = useSession();
  let status = session.status;
  const router = useRouter();

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/admin";
  const handleSubmit = async (e) => {
    e.preventDefault();
    const callbackurl = "/admin";
    try {
      setLoading(true);
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackurl,
      });
      setLoading(false);
      if (result.error) {
        toast.error(result.error);
      } else {
        toast.success("Login successful");
        router.replace(callbackUrl);
        //router.push(callbackUrl);
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
      toast.error("An error occurred. Try again.");
    }
  };

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
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label for="email">Email (admin@gmail.com)</label>
                <input
                  id="email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input"
                  placeholder="Enter Email"
                />
              </div>
              <div>
                <label for="password">Password (123123)</label>
                <input
                  id="password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-input"
                  placeholder="Enter Password"
                />
              </div>
              <div>
                <label className="cursor-pointer">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="text-white-dark">Remember me</span>
                </label>
              </div>

              <button
                type="submit"
                className="btn btn-primary text-black"
                disabled={loading || !email || !password}
              >
                {loading ? "Please wait..." : "SIGN IN"}
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
                  onClick={() => signIn("google")}
                  type="button"
                  className="btn flex gap-1 bg-white-dark/30 text-black shadow-none hover:bg-white dark:border-[#253b5c] dark:bg-transparent dark:text-white dark:hover:bg-[#1b2e4b] sm:gap-2"
                >
                  Google
                </button>
              </li>

              <li>
                <button
                  onClick={() => signIn("facebook")}
                  type="button"
                  className="btn flex gap-1 bg-white-dark/30 text-black shadow-none hover:bg-white dark:border-[#253b5c] blue:bg-transparent dark:text-white dark:hover:bg-[#1b2e4b] sm:gap-2"
                >
                  Facebook
                </button>
              </li>
              <li>
                <button
                  onClick={() => signIn("github")}
                  type="button"
                  className="btn flex gap-1 bg-white-dark/30 text-black shadow-none hover:bg-white dark:border-[#253b5c] dark:bg-transparent dark:text-white dark:hover:bg-[#1b2e4b] sm:gap-2"
                >
                  Github
                </button>
              </li>
              <li>
                <button
                  onClick={() => signIn("twitter")}
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
                href="/register"
                className="font-bold text-primary hover:underline"
              >
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
}
