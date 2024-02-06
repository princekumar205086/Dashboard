"use client";
import React from "react";
import Layout from "../components/layout";
import dynamic from 'next/dynamic'
const AreaChart = dynamic(() => import('./charts/areaChart'), {
  loading: () => <p>Loading...</p>,
});
const CandleStickChart = dynamic(() => import('./charts/candleStickChart'), {
  loading: () => <p>Loading...</p>,
});
const LineChart = dynamic(() => import('./charts/lineChart'), {
  loading: () => <p>Loading...</p>,
});
const PieChart = dynamic(() => import('./charts/barChart'), {
  loading: () => <p>Loading...</p>,
});
const DonutChart = dynamic(() => import('./charts/donutChart'), {
  loading: () => <p>Loading...</p>,
});
const BarChart = dynamic(() => import('./charts/barChart'), {
  loading: () => <p>Loading...</p>,
});

export default function Analytics() {
  return (
    <Layout>
      <h2 className="text-xl mb-3">Analytics</h2>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-5 rounded-lg shadow-lg px-4 bg-white py-4">
          <AreaChart />
        </div>
        <div className="col-span-7 rounded-lg shadow-lg px-4 bg-white py-4">
          <BarChart />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4 mt-5">
        <div className="col-span-8 rounded-lg shadow-lg px-4 bg-white py-4">
          <CandleStickChart />
        </div>
        <div className="col-span-4 rounded-lg shadow-lg px-4 bg-white py-4">
          <PieChart />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4 mt-5">
        <div className="col-span-6 rounded-lg shadow-lg px-4 bg-white py-4">
          <LineChart />
        </div>
        <div className="col-span-6 rounded-lg shadow-lg px-4 bg-white py-4">
          <DonutChart />
        </div>
      </div>
    </Layout>
  );
}
