"use client";
import React from "react";
import Layout from "../components/layout";
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import CountUp from 'react-countup';
import { Circle } from 'rc-progress';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import DvrRoundedIcon from '@mui/icons-material/DvrRounded';
import TinyBarChart from "./dashchart";
import TimelineIcon from '@mui/icons-material/Timeline';
import LineArea from "./linechart";
import Divider from '@mui/material/Divider';

export default function Dashboard() {

  return (
    <Layout>
      <>
        <div className="mx-5">
          {/* Cards Starting */}
          <div className="grid grid-cols-4 gap-6">
            <div className="lg:col-span-1 sm:col-span-4 xs:col-span-4">
              <div className="max-w-md mx-auto bg-sky-50 rounded-3xl shadow-lg overflow-hidden duration-150 transition hover:scale-105">
                <div className="flex justify-between">
                  <div className="pt-5 pl-10">
                    <PeopleAltRoundedIcon className="text-4xl" />
                  </div>
                  <div className="pt-5 pr-10">
                    <div className="roundprogress duration-150 transition hover:scale-110">
                      <Circle percent={77} strokeWidth={10} strokeColor="rgb(2 132 199)" trailColor="#b3a4f3" trailWidth={8} />
                      <span className="countpercrnt">
                        <CountUp start={0} end={77} delay={0} duration={2} />%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="md:flex">
                  <div className="pl-8 pt-3 pb-8">
                    <div className="uppercase tracking-wide text-sm text-sky-600 font-bold">Total Users</div>
                    <div className="block mt-1 text-3xl leading-tight font-medium text-black hover:underline">
                      <CountUp start={0} end={127} delay={0} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-1 sm:col-span-4 xs:col-span-4">
              <div className="max-w-md mx-auto bg-sky-50 rounded-3xl shadow-lg overflow-hidden duration-150 transition hover:scale-105">
                <div className="flex justify-between">
                  <div className="pt-5 pl-10">
                    <AssignmentRoundedIcon className="text-4xl" />
                  </div>
                  <div className="pt-5 pr-10">
                    <div className="roundprogress duration-150 transition hover:scale-110">
                      <Circle percent={67} strokeWidth={10} strokeColor="#d11f28" trailColor="#b3a4f3" trailWidth={8} />
                      <span className="countpercrnt">
                        <CountUp start={0} end={67} delay={0} duration={2} />%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="md:flex">
                  <div className="pl-8 pt-3 pb-8">
                    <div className="uppercase tracking-wide text-sm text-sky-600 font-bold">Pending Task</div>
                    <div className="block mt-1 text-3xl leading-tight font-medium text-black hover:underline">
                      <CountUp start={0} end={30} delay={1} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-1 sm:col-span-4 xs:col-span-4">
              <div className="max-w-md mx-auto bg-sky-50 rounded-3xl shadow-lg overflow-hidden duration-150 transition hover:scale-105">
                <div className="flex justify-between">
                  <div className="pt-5 pl-10">
                    <CalendarMonthRoundedIcon className="text-4xl" />
                  </div>
                  <div className="pt-5 pr-10">
                    <div className="roundprogress duration-150 transition hover:scale-110">
                      <Circle percent={35} strokeWidth={10} strokeColor="rgb(2 132 199)" trailColor="#b3a4f3" trailWidth={8} />
                      <span className="countpercrnt">
                        <CountUp start={0} end={35} delay={0} duration={2} />%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="md:flex">
                  <div className="pl-8 pt-3 pb-8">
                    <div className="uppercase tracking-wide text-sm text-sky-600 font-bold">Meetings</div>
                    <div className="block mt-1 text-3xl leading-tight font-medium text-black hover:underline">
                      <CountUp start={0} end={42} delay={2} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-1 sm:col-span-4 xs:col-span-4">
              <div className="max-w-md mx-auto bg-sky-50 rounded-3xl shadow-lg overflow-hidden duration-150 transition hover:scale-105">
                <div className="flex justify-between">
                  <div className="pt-5 pl-10">
                    <DvrRoundedIcon className="text-4xl" />
                  </div>
                  <div className="pt-5 pr-10">
                    <div className="roundprogress duration-150 transition hover:scale-110">
                      <Circle percent={89} strokeWidth={10} strokeColor="#1fd184" trailColor="#b3a4f3" trailWidth={8} />
                      <span className="countpercrnt">
                        <CountUp start={0} end={89} delay={0} duration={2} />%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="md:flex">
                  <div className="pl-8 pt-3 pb-8">
                    <div className="uppercase tracking-wide text-sm text-sky-600 font-bold">Orders</div>
                    <div className="block mt-1 text-3xl leading-tight font-medium text-black hover:underline">
                      <CountUp start={0} end={900} delay={3} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Cards Ending */}
          {/* Bar Chart Starting */}
          <div className="grid grid-cols-12 gap-6 mt-10">
            <div className="lg:col-span-3 sm:col-span-12 xs:col-span-12">
              <div className="mx-auto bg-gradient-to-r from-blue-700 to-sky-500 rounded-3xl shadow-lg overflow-hidden duration-150 transition hover:scale-105">
                <div style={{ minHeight: "400px" }}>
                  <div className="mx-5 my-4">
                    <Circle
                      percent={60}
                      strokeWidth={8}
                      gapDegree={180}
                      strokeColor="#8ef0c6"
                      trailWidth={8}
                      trailColor="#b3a4f3"
                      className="duration-150 transition hover:scale-105"
                    />
                    <div className="flex justify-center">
                      <span className="countpercrntsemi">
                        <CountUp start={0} end={60} delay={0} duration={2} />%
                      </span>
                    </div>
                    <div className="flex justify-center">
                      <div>
                        <div>
                          <TimelineIcon className="-mt-40 ml-14 text-white text-7xl" />
                        </div>
                        <div className="text-white text-3xl -mt-10">
                          $933,879.89
                        </div>
                        <div className="text-slate-200 text-center">
                          Amount Owned
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-9 sm:col-span-12 xs:col-span-12">
              <div className="mx-auto bg-transparent rounded-3xl shadow-lg overflow-hidden">
                <div className="lg:flex">
                  <div className="ml-3 py-3">
                    <div style={{ minWidth: "300px" }} className="my-3 mx-3 bg-sky-50 rounded-3xl shadow-lg overflow-hidden duration-150 transition hover:scale-105">
                      <div className="flex justify-between">
                        <div className="pt-5 pl-10">
                          <AssignmentRoundedIcon className="text-4xl" />
                        </div>
                        <div className="pt-5 pr-10">
                          <div className="roundprogress duration-150 transition hover:scale-110">
                            <Circle percent={55} strokeWidth={10} strokeColor="rgb(2 132 199)" trailColor="#b3a4f3" trailWidth={8} />
                            <span className="countpercrnt">
                              <CountUp start={0} end={55} delay={0} duration={2} />%
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="md:flex">
                        <div className="pl-8 pt-3 pb-8">
                          <div className="uppercase tracking-wide text-sm text-sky-600 font-bold">Paid Invoice</div>
                          <div className="block mt-1 text-3xl leading-tight font-medium text-black hover:underline">
                            <CountUp start={0} end={330} delay={1} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="my-3 mx-3 bg-sky-50 rounded-3xl shadow-lg overflow-hidden duration-150 transition hover:scale-105">
                      <div className="flex justify-between">
                        <div className="pt-5 pl-10">
                          <DvrRoundedIcon className="text-4xl" />
                        </div>
                        <div className="pt-5 pr-10">
                          <div className="roundprogress duration-150 transition hover:scale-110">
                            <Circle percent={48} strokeWidth={10} strokeColor="rgb(2 132 199)" trailColor="#b3a4f3" trailWidth={8} />
                            <span className="countpercrnt">
                              <CountUp start={0} end={48} delay={0} duration={2} />%
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="pl-8 pt-3 pb-8">
                          <div className="uppercase tracking-wide text-sm text-sky-600 font-bold">Market Value</div>
                          <div className="block mt-1 text-3xl leading-tight font-medium text-black hover:underline">
                            <CountUp start={0} end={410} delay={3} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <TinyBarChart />
                </div>
              </div>

            </div>
          </div>
          {/* Bar Chart Ending */}
          {/* Line Chart Starting */}
          <div className="grid grid-cols-12 gap-6 mt-10">
            <div className="lg:col-span-9 sm:col-span-12 xs:col-span-12">
              <div className="mx-auto bg-sky-50 rounded-3xl shadow-lg overflow-hidden">
                <LineArea />
              </div>

            </div>
            <div className="lg:col-span-3 sm:col-span-12 xs:col-span-12">
              <div className="lg:col-span-1 sm:col-span-4 xs:col-span-4">
                <div className="mx-auto px-1 bg-sky-50 rounded-3xl shadow-lg overflow-hidden duration-150 transition hover:scale-105">
                  <div className="flex justify-between px-10 py-3 mt-5">
                    <div className="flex gap-3">
                      <DvrRoundedIcon className="text-2xl text-sky-600" />
                      <div className="block mt-1 text-sm leading-tight font-medium text-black hover:underline">
                        <CountUp start={0} end={99} delay={3} />% Uptime
                      </div>
                    </div>
                  </div>
                  <Divider />
                  <div className="flex justify-between px-10 py-2">
                    <div className="flex gap-3">
                      <PeopleAltRoundedIcon className="text-2xl text-sky-600" />
                      <div className="block mt-1 text-sm leading-tight font-medium text-black hover:underline">
                        <CountUp start={0} end={89} delay={3} />% Connected
                      </div>
                    </div>
                  </div>
                  <Divider />
                  <div className="flex justify-between px-10 py-2">
                    <div className="flex gap-3">
                      <DvrRoundedIcon className="text-2xl text-sky-600" />
                      <div className="block mt-1 text-sm leading-tight font-medium text-black hover:underline">
                        <CountUp start={0} end={56} delay={3} />% Earning
                      </div>
                    </div>
                  </div>
                  <Divider />
                  <div className="flex justify-between px-10 py-2">
                    <div className="flex gap-3">
                      <CalendarMonthRoundedIcon className="text-2xl text-sky-600" />
                      <div className="block mt-1 text-sm leading-tight font-medium text-black hover:underline">
                        <CountUp start={0} end={28} delay={3} />% Online
                      </div>
                    </div>
                  </div>
                  <Divider />
                  <div className="flex justify-between px-10 py-2">
                    <div className="flex gap-3">
                      <AssignmentRoundedIcon className="text-2xl text-sky-600" />
                      <div className="block mt-1 text-sm leading-tight font-medium text-black hover:underline">
                        <CountUp start={0} end={17} delay={3} />% Developers
                      </div>
                    </div>
                  </div>
                  <Divider />
                  <div className="flex justify-between px-10 py-3 mb-5">
                    <div className="flex gap-3">
                      <PeopleAltRoundedIcon className="text-2xl text-sky-600" />
                      <div className="block mt-1 text-sm leading-tight font-medium text-black hover:underline">
                        <CountUp start={0} end={87} delay={3} />% SriPandit
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Line Chart Ending */}
        </div>
      </>
    </Layout>
  );
}
