import React, { useState, useEffect } from "react";
import "../../styles/styles.css";
import { useHistory, Redirect } from "react-router-dom";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");
  const history = useHistory();
  /*  useEffect(() => {
        setUsername(JSON.parse(window.localStorage.getItem('username')));
        setUseremail(JSON.parse(window.localStorage.getItem('useremail')));

      }, []); */

  /*  useEffect(() => {
        window.localStorage.setItem('username', username);
        window.localStorage.setItem('useremail', useremail);
      }, [username,useremail]); */
  return (
    <div>
      <div class="bg-gray-lighter min-h-screen flex flex-col">
        <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 class="mb-8 text-3xl text-center">Sign up</h1>
            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="fullname"
              placeholder="Full Name"
              value={username}
              onChange={(e) => {
                localStorage.setItem("username", e.target.value);

                setUsername(e.target.value);
              }}
            />

            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              value={useremail}
              onChange={(e) => {
                localStorage.setItem("useremail", e.target.value);
                setUseremail(e.target.value);
              }}
            />

            <button
              type="submit"
              class="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1"
              onClick={(e) => {
                console.log("details", username, useremail);
                history.push("/welcome");
              }}
            >
              Register
            </button>

            <div class="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the
              <a
                class="no-underline border-b border-grey-dark text-grey-dark"
                href="."
              >
                Terms of Service
              </a>{" "}
              and
              <a
                class="no-underline border-b border-grey-dark text-grey-dark"
                href="."
              >
                Privacy Policy
              </a>
            </div>
          </div>

          <div class="text-grey-dark mt-6">
            Already have an account?
            <a
              class="no-underline border-b border-blue text-blue"
              href="../login/"
            >
              Log in
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  );
}
