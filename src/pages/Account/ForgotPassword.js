import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logoLight } from "../../assets/images";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    if (!email) {
      setErrEmail("Enter your email");
      return;
    }

    // Call your server-side API to send a password reset email
    try {
      const response = await fetch("/api/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSuccessMsg(
          `A password reset link has been sent to ${email}. Please check your email for further instructions.`
        );
        setEmail("");
      } else {
        const data = await response.json();
        setErrEmail(data.message || "Failed to send reset link");
      }
    } catch (error) {
      console.error("Error sending reset link:", error);
      setErrEmail("Failed to send reset link. Please try again later.");
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-1/2 hidden lgl:inline-flex h-full text-white">
        <div className="w-[450px] h-full bg-primeColor px-10 flex flex-col gap-6 justify-center">
          <Link to="/">
            <img src={logoLight} alt="logoImg" className="w-28" />
          </Link>
          <div className="flex flex-col gap-1 -mt-1">
            <h1 className="font-titleFont text-xl font-medium">
              Get started for free
            </h1>
            <p className="text-base">Create your account to access more</p>
          </div>
          {/* Additional platform information */}
          <div className="w-[300px] flex items-start gap-3">
            <span className="text-green-500 mt-1">✔</span>
            <p className="text-base text-gray-300">
              <span className="text-white font-semibold font-titleFont">
                Get started fast with ESHOP
              </span>
              <br />
              Explore a fast and seamless onboarding process with ESHOP.
            </p>
          </div>
          {/* Additional platform information */}
          <div className="w-[300px] flex items-start gap-3">
            <span className="text-green-500 mt-1">✔</span>
            <p className="text-base text-gray-300">
              <span className="text-white font-semibold font-titleFont">
                Access all ESHOP services
              </span>
              <br />
              Enjoy full access to a wide range of services provided by ESHOP.
            </p>
          </div>
          {/* Additional platform information */}
          <div className="w-[300px] flex items-start gap-3">
            <span className="text-green-500 mt-1">✔</span>
            <p className="text-base text-gray-300">
              <span className="text-white font-semibold font-titleFont">
                Trusted by online shoppers
              </span>
              <br />
              Join a community of online shoppers who trust ESHOP for their
              needs.
            </p>
          </div>
          {/* Footer */}
          <div className="flex items-center justify-between mt-10">
            <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
              © ESHOP
            </p>
            <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
              Terms
            </p>
            <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
              Privacy
            </p>
            <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
              Security
            </p>
          </div>
        </div>
      </div>

      <div className="w-full lgl:w-1/2 h-full">
        {successMsg ? (
          <div className="w-full lgl:w-[500px] h-full flex flex-col justify-center items-center">
            <p className="w-full px-4 py-10 text-green-500 font-medium font-titleFont text-center">
              {successMsg}
            </p>
            <Link to="/signup">
              <button
                className="w-full h-10 bg-primeColor text-gray-200 rounded-md text-base font-titleFont font-semibold 
            tracking-wide hover:bg-black hover:text-white duration-300"
              >
                Sign Up
              </button>
            </Link>
          </div>
        ) : (
          <form className="w-full lgl:w-[450px] h-screen flex items-center justify-center">
            <div className="px-6 py-4 w-full h-[90%] flex flex-col justify-center overflow-y-scroll scrollbar-thin scrollbar-thumb-primeColor">
              <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-3xl mdl:text-4xl mb-4">
                Forgot Password
              </h1>
              <div className="flex flex-col gap-3">
                {/* Email */}
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Email
                  </p>
                  <input
                    onChange={handleEmail}
                    value={email}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="email"
                    placeholder="john@workemail.com"
                  />
                  {errEmail && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errEmail}
                    </p>
                  )}
                </div>

                <button
                  onClick={handleForgotPassword}
                  className="bg-primeColor hover:bg-black text-gray-200 hover:text-white cursor-pointer w-full text-base font-medium h-10 rounded-md  duration-300"
                >
                  Reset Password
                </button>
                <p className="text-sm text-center font-titleFont font-medium mt-3">
                  Remember your password?{" "}
                  <Link to="/signin">
                    <span className="hover:text-blue-600 duration-300">
                      Sign in
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
