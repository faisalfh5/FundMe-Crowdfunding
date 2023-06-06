import React from "react";
import { Sidebar, Navbar_dash } from "../components/index";
import Exploreproject from "../components/Exploreprojects";

const Voting = () => {
  return (
    <>
      <div className="relative sm:-8 p-4  min-h-screen flex flex-row ">
        <div className="sm:flex hidden mr-10 relative">
          <Sidebar />
        </div>
        <div className="flex-1 max-sm:w-full max-w-[1200px] mx-auto sm:pr-5">
          <Navbar_dash />
          <Exploreproject />

          <div className="mx-auto max-w-screen-md px-4 py-16 sm:px-6 lg:px-8 bg-slate-100 mt-20">
            <div className="mx-auto max-w-lg text-center">
              <h1 className="text-2xl font-bold sm:text-3xl">Make Payment</h1>

              <p className="mt-4 text-gray-500">
                Blockchain-based crowdfunding offers direct and efficient
                payments, eliminating the need for intermediaries and ensuring
                secure transactions.
              </p>
            </div>

            <form action="" className="mx-auto mb-0 mt-8 max-w-md space-y-4 ">
              <div>
                <label for="text" className="sr-only">
                  Address
                </label>

                <div className="relative">
                  <input
                    type="text"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Enter Your Wallet Address"
                  />

                  <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </span>
                </div>
              </div>

              <div>
                <label for="number" className="sr-only">
                  Payment
                </label>

                <div class="relative">
                  <input
                    type="number"
                    class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm "
                    placeholder="Enter Payment you will donate"
                  />

                  <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </span>
                </div>
              </div>

              <div class="flex items-center justify-between">
                <button
                  type="submit"
                  class="inline-block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                  onClick={() =>
                    alert("Are you Satisfy with your entered amount")
                  }
                >
                  Send Payment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Voting;
