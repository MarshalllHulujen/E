import React from "react";
import { useLocation, Link } from "react-router-dom";

import { useEffect, useState } from "react";

export const Header = () => {
  const location = useLocation();
  const [hide, setHide] = useState(true);

  const bairshil = location.pathname;
  useEffect(() => {
    if (bairshil === "/") {
      document.getElementById("homeid").style.borderBottom =
        "3px solid #0c4a6e";
    } else if (bairshil === "/blog") {
      document.getElementById("blogid").style.borderBottom =
        "3px solid #0c4a6e";
    } else if ((bairshil === "/signin") | (bairshil === "/signup")) {
      setHide();
    }
  }, [bairshil]);
  return (
    <div>
      {hide ? (
        <header id="header">
          <div className="flex flex-row ...  justify-between ... pt-8 ... pl-6 ... pr-6 ... ">
            <div className="flex flex-row ... gap-x-3 items-center">
              <img
                src="/image.png"
                className="object-cover h-10 w-10 ..."
                alt="world"
              />
              <h5>Monday, February 10, 2023</h5>
            </div>
            <div className="gap-7">
              <div className="flex text-5xl ... italic ... font-lora ... justify-center ...">
                2023 Hop2c
              </div>
              <div className="flex gap-5 pt-5 ">
                <a
                  href="/"
                  class="font-medium text-slate-800  hover:text-sky-900"
                  id="homeid"
                >
                  Home
                </a>
                <a
                  href="/"
                  class="font-medium text-slate-800 hover:text-sky-900"
                >
                  Eu Finace
                </a>
                <a
                  href="/"
                  class="font-medium text-slate-800 hover:text-sky-900"
                >
                  Capital Market
                </a>
                <a
                  href="/"
                  class="font-medium text-slate-800 hover:text-sky-900"
                >
                  World Economy
                </a>
                <a
                  href="/"
                  class="font-medium text-slate-800 hover:text-sky-900"
                >
                  Finance
                </a>
                <a
                  href="/"
                  class="font-medium text-slate-800 hover:text-sky-900"
                >
                  Environment
                </a>
                <a
                  href="/"
                  class="font-medium text-slate-800 hover:text-sky-900"
                >
                  Spot Ecnomy
                </a>
                <a
                  href="/blog"
                  class="font-medium text-slate-800 hover:text-sky-900"
                  id="blogid"
                >
                  Blog
                </a>
              </div>
            </div>
            <div className="flex flex-wrap ... gap-x-8 ... content-baseline items-center">
              <img
                src="Search-bar.png"
                className="object-cover h-10 w-10 ... "
                alt="galileo"
              />
              <Link to="/signin">
                <button className="border-0 hover:text-sky-900">Sign in</button>
              </Link>
              <Link to="/">
                <button className="bg-sky-800 text-gray-100 font-bold py-1 px-4 rounded w-40 ... h-10 rounded-full">
                  Subscribe
                </button>
              </Link>
            </div>
          </div>
          <hr className="h-px my-4 mb-8 bg-gray-200 border-0 dark:bg-gray-700 " />
        </header>
      ) : (
        <></>
      )}
    </div>
  );
};
