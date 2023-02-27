import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export const Blog = () => {
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="w-4/5 flex justify-center flex-col ">
        <h1 className="font-semibold" style={{ fontSize: "8em" }}>
          Stand up for Somalia
        </h1>
        <div className="h-0.5 w-full bg-slate-900 opacity-60 mt-1"></div>
        <div className="flex items-center p-3  justify-between">
          <div className="flex gap-x-3 items-center">
            <img src="pfp.png" />
            <div>
              <p className="font-semibold " style={{ fontSize: "20px" }}>
                Christine Kolesnikov
              </p>
              <p className="text-gray-600">Hypnosis - Senior Editor</p>
            </div>
          </div>
          <div className="flex gap-x-3">
            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded flex items-center gap-x-2">
              <img src="facebook.png" />
              Share
            </button>
            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded flex items-center gap-x-2">
              <img src="twitter.png" />
              Tweet
            </button>
            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded flex items-center gap-x-2">
              <img src="Linkedin.png" />
              Share
            </button>
            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded flex items-center gap-x-2">
              <img src="link.png" />
              Copy
            </button>
          </div>
        </div>
        <div className="h-0.5 w-full bg-slate-900 opacity-60 "></div>
        <img src="kid.png" alt="" className="w-11/12 rounded-2xl mt-8" />
        <div className="flex">
          <h1 className="font-semibold mr-5">
            People are dying of hunger...
            <br /> there’s no water’
          </h1>
          <div className="ml-3">
            <h1>
              In Somalia, more than 6 million people are in need of food
              <br />
              assistance – more than half the population. But even inside <br />
              the camps, food is scarce.
            </h1>
          </div>
        </div>
        <div className="mt-8">
          <div className="font-semibold">
            Top business headlines in the US right now
          </div>
          <div className="text-teal-700 font-semibold">CNBC</div>
          <div className="flex flex-row">
            <div>
              <div className="w-5/5 rounded-2xl overflow-hidden drop-shadow-2xl bg-slate-50">
                <img
                  src="https://image.cnbcfm.com/api/v1/image/107192700-1676042864762-gettyimages-1464759873-032a8465_3f4d1382-cdea-4d0e-be99-a9c0ed9919db.jpeg?v=1676243079&w=1920&h=1080"
                  alt=""
                  className="object-cover h-96 w-full"
                />
                <div className="m-4">
                  <div className="font-semibold text-lg text-slate-900">
                    Stock futures fall as Wall Street tries to rebound from a
                    rocky week: Live updates - CNBC
                  </div>
                  <div className="mt-2">
                    All three major indexes ended the week on a downturn. The
                    Dow ended the week down 0.17%. The S&P 500 fell 1.11%, and
                    the tech-heavy Nasdaq slid 2.41%.
                  </div>
                  <div className="mt-2">2023-02-13T06:22:00Z</div>
                </div>
              </div>
            </div>
            <div className="ml-8 flex justify-between flex-col">
              <div className="p-2 rounded-2xl overflow-hidden drop-shadow-2xl bg-slate-50">
                <div className="m-4">
                  <div className="font-semibold text-lg text-slate-900">
                    Stock futures fall as Wall Street tries to rebound from a
                    rocky week: Live updates - CNBC
                  </div>
                  <div className="mt-2">
                    All three major indexes ended the week on a downturn. The
                    Dow ended the week down 0.17%. The S&P 500 fell 1.11%, and
                    the tech-heavy Nasdaq slid 2.41%.
                  </div>
                  <div className="mt-2">2023-02-13T06:22:00Z</div>
                </div>
              </div>
              <div className="p-2 mt-4 rounded-2xl overflow-hidden drop-shadow-2xl bg-slate-50">
                <div className="m-2">
                  <div className="font-semibold text-lg text-slate-900">
                    Stock futures fall as Wall Street tries to rebound from a
                    rocky week: Live updates - CNBC
                  </div>
                  <div className="mt-2">
                    All three major indexes ended the week on a downturn. The
                    Dow ended the week down 0.17%. The S&P 500 fell 1.11%, and
                    the tech-heavy Nasdaq slid 2.41%.
                  </div>
                  <div className="mt-2">2023-02-13T06:22:00Z</div>
                </div>
              </div>
              <div className="p-2 mt-4 rounded-2xl overflow-hidden drop-shadow-2xl bg-slate-50">
                <div className="m-4">
                  <div className="font-semibold text-lg text-slate-900">
                    Stock futures fall as Wall Street tries to rebound from a
                    rocky week: Live updates - CNBC
                  </div>
                  <div className="mt-2">
                    All three major indexes ended the week on a downturn. The
                    Dow ended the week down 0.17%. The S&P 500 fell 1.11%, and
                    the tech-heavy Nasdaq slid 2.41%.
                  </div>
                  <div className="mt-2">2023-02-13T06:22:00Z</div>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex justify-between mt-8">
            <div className="p-2 w-[40%] rounded-2xl overflow-hidden drop-shadow-2xl bg-slate-50">
              <div className="m-4">
                <div className="font-semibold text-lg text-slate-900">
                  Stock futures fall as Wall Street tries to rebound from a
                  rocky week: Live updates - CNBC
                </div>
                <div className="mt-2">
                  All three major indexes ended the week on a downturn. The Dow
                  ended the week down 0.17%. The S&P 500 fell 1.11%, and the
                  tech-heavy Nasdaq slid 2.41%.
                </div>
                <div className="mt-2">2023-02-13T06:22:00Z</div>
              </div>
            </div>
            <div className="p-2 w-[40%] ml-8 rounded-2xl overflow-hidden drop-shadow-2xl bg-slate-50">
              <div className="m-2">
                <div className="font-semibold text-lg text-slate-900">
                  Stock futures fall as Wall Street tries to rebound from a
                  rocky week: Live updates - CNBC
                </div>
                <div className="mt-2">
                  All three major indexes ended the week on a downturn. The Dow
                  ended the week down 0.17%. The S&P 500 fell 1.11%, and the
                  tech-heavy Nasdaq slid 2.41%.
                </div>
                <div className="mt-2">2023-02-13T06:22:00Z</div>
              </div>
            </div>
            <div className="p-2 w-[40%] ml-8 rounded-2xl overflow-hidden drop-shadow-2xl bg-slate-50">
              <div className="m-4">
                <div className="font-semibold text-lg text-slate-900">
                  Stock futures fall as Wall Street tries to rebound from a
                  rocky week: Live updates - CNBC
                </div>
                <div className="mt-2">
                  All three major indexes ended the week on a downturn. The Dow
                  ended the week down 0.17%. The S&P 500 fell 1.11%, and the
                  tech-heavy Nasdaq slid 2.41%.
                </div>
                <div className="mt-2">2023-02-13T06:22:00Z</div>
              </div>
            </div>
          </div>
          <div className="h-0.5 w-full bg-slate-900 mt-5"></div>
          <div className="h-0.5 w-full bg-slate-900 mt-1"></div>
        </div>
      </div>
    </div>
  );
};
