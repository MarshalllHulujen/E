import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import bulding from "./assets/building_main_img.webp";
export const Body = () => {
  return (
    <div className="w-4/5 ">
      <div className="relative text-white">
        <img
          src={bulding}
          alt=""
          className="w-full rounded-2xl brightness-50 object-cover h-[500px]"
        />
        <div className="absolute bottom-0 left-0 ml-16 mb-16">
          <div className="text-3xl w-2/5 font-semibold">
            Luxury car shoppers may be turning their backs Tesla, survey finds
          </div>
          <div className="text-xl w-4/5 mt-8">
            The number of shoppers considering a Tesla plunged in the last
            quarter, falling to a single-digit percentage, according to a
            consumer perception survey.
          </div>
        </div>
      </div>
      <div className="h-0.5 w-full bg-slate-900 mt-5"></div>
      <div className="h-0.5 w-full bg-slate-900 mt-1"></div>
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
                  All three major indexes ended the week on a downturn. The Dow
                  ended the week down 0.17%. The S&P 500 fell 1.11%, and the
                  tech-heavy Nasdaq slid 2.41%.
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
                  All three major indexes ended the week on a downturn. The Dow
                  ended the week down 0.17%. The S&P 500 fell 1.11%, and the
                  tech-heavy Nasdaq slid 2.41%.
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
                  All three major indexes ended the week on a downturn. The Dow
                  ended the week down 0.17%. The S&P 500 fell 1.11%, and the
                  tech-heavy Nasdaq slid 2.41%.
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
                  All three major indexes ended the week on a downturn. The Dow
                  ended the week down 0.17%. The S&P 500 fell 1.11%, and the
                  tech-heavy Nasdaq slid 2.41%.
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
                Stock futures fall as Wall Street tries to rebound from a rocky
                week: Live updates - CNBC
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
                Stock futures fall as Wall Street tries to rebound from a rocky
                week: Live updates - CNBC
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
                Stock futures fall as Wall Street tries to rebound from a rocky
                week: Live updates - CNBC
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
  );
};
