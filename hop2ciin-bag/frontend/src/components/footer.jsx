import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const Footer = () => {
  const [hide, setHide] = useState(true);
  const location = useLocation();
  const bairshil = location.pathname;
  useEffect(() => {
    if ((bairshil === "/signin") | (bairshil === "/signup")) {
      setHide(false);
    }
  }, [bairshil]);
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <div>
      {hide ? (
        <footer>
          <div className="bg-slate-900 flex flex-wrap w-100 h-50 pb-20 ... content-baseline">
            <div id="1" className="mt-20 ... pl-10 ... pl-40">
              <img src="/news-4303.png" />
              <h4 className="text-white pt-20">2023 HOP 2C CREATED</h4>
            </div>
            <div id="2" className="pl-20 pt-8 ...">
              <Link to="/">
                <h4 className="text-white mt-12">Home</h4>
              </Link>

              <h4 className="text-white pt-5">EU Finance</h4>
              <h4 className="text-white pt-5">Capital Market</h4>
              <h4 className="text-white pt-5">World Economy</h4>
              <h4 className="text-white pt-5">Opinion</h4>
              <h4 className="text-white pt-5">Finance</h4>
            </div>
            <div id="3" className="pl-20 pt-8 ...">
              <h4 className="text-white pt-12">Business</h4>
              <h4 className="text-white pt-5">Agriculture</h4>
              <h4 className="text-white pt-5">Sport Economy</h4>
              <Link to="/blog">
                <h4 className="text-white pt-5">Blog</h4>
              </Link>
              <h4 className="text-white pt-5">Podcast</h4>
              <h4 className="text-white pt-5">Video</h4>
            </div>
            <div id="4" className="pl-20 pt-8   ... opacity-70">
              <h4 className="text-white pt-12">Terms of Use</h4>
              <h4 className="text-white pt-5">Privacy</h4>
              <h4 className="text-white pt-5">Cookies Policy</h4>
              <h4 className="text-white pt-5">Manage Cookies</h4>
              <h4 className="text-white pt-5">Accesibility</h4>
              <h4 className="text-white pt-5">Contact Us</h4>
            </div>
            <div
              id="5"
              className="flex flex-wrap ... gap-x-5 pl-20 pt-20 ... content-baseline"
            >
              <div>
                <img src="/2.png" className="object-cover h-15 w-7 ..." />
              </div>
              <div>
                <img src="/1.png" className="object-cover h-15 w-7 ..." />
              </div>
              <div>
                <img src="/3s.png" className="object-cover h-15 w-7 pt-1 ..." />
              </div>
            </div>
            <div id="6">
              <h1 className="text-white ... text-4xl ... pl-20 ... pt-12 ... pt-19">
                Subscribe and be informed first hand
              </h1>
              <h1 className="text-white ... text-4xl ... pl-20 ...">
                about the actual economic news
              </h1>
              <h1 className="text-slate-400 ... pl-20 ... pt-5">
                All the day's headlines and highlightes, direct to you every
                morning.
              </h1>
            </div>
            <div
              id="7"
              className="pt-10 ... pt-15 ... pt-15 ... pl-10 ... pl-40"
            >
              <button className="bg-sky-700 hover:bg-sky-600 text-white  py-1 px-4 rounded-full w-40 ... h-10 ...">
                Subscribe
              </button>
              <div
                className="flex flex-row ... mt-20 ... mt-40 ... mt-50 ... mt-60 gap-3 cursor-pointer items-center"
                onClick={topFunction}
              >
                <h1 className="text-white">Back to top</h1>
                <img className="object-cover h-15 w-9  ..." src="/4.png" />
              </div>
            </div>
          </div>
        </footer>
      ) : (
        <></>
      )}
    </div>
  );
};
