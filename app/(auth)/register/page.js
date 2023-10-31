"use client";
import { nanoid } from "nanoid";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [mailBody, setMailBody] = useState("");
  async function sendEmail(mailObj) {
    let sendmail = await fetch(`${process.env.API}/email`, {
      method: "POST",
      headers: {
        accept: "application/json",
      },
      body: JSON.stringify(mailObj),
    });
    const json = await sendmail.json();
    console.log(json);
  }

  const router = useRouter();

  //send mail

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const verification_token = nanoid(32);
      const response = await fetch(`${process.env.API}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, verification_token }),
      });

      if (!response.ok) {
        const data = await response.json();
        toast.error(data.err);
        setLoading(false);
        return;
      }

      const data = await response.json();
      toast.success(data.success);

      //send mail
      const vlink = `${process.env.API}/registation_verification?verification_token=${verification_token}`;
      const mailBody = `Please click the link below to verify your email address.<br><br> Verify link: <a href=${vlink}>Verified Link</a><br><br>Thank you`;
      const mailObj = {
        mailto: email,
        subject: "Email Verificarion",
        mailbody: mailBody,
      };
      sendEmail(mailObj);

      ///end mail////
      setLoading(false);
      router.push("/login");
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
            <div className="alert alert-danger bg-danger">{mailBody}</div>

            <h2 className="mb-3 text-2xl font-bold">Sign Up</h2>
            <p className="mb-7">
              Enter your name, email and password to register
            </p>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  className="form-input"
                  placeholder="Enter Name"
                />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input"
                  placeholder="Enter Email"
                />
              </div>

              <div>
                <label htmlFor="password">Password</label>
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
                  <span className="text-white-dark">
                    I agree the <a href="#">Terms and Conditions</a>
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="btn btn-primary text-black"
                disabled={loading || !name || !email || !password}
              >
                {loading ? "Please wait..." : "Submit"}
              </button>
              <p>Note: After Registration, You will get a verification Mail</p>
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
              Already have an account ?{" "}
              <a
                href="/login"
                className="font-bold text-primary hover:underline"
              >
                Sign In
              </a>
            </p>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
}
