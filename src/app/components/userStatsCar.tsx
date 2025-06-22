"use client";

import { faker } from "@faker-js/faker";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const generateData = () =>
  Array.from({ length: 7 }, (_, i) => ({
    day: `Day ${i + 1}`,
    users: faker.number.int({ min: 1000, max: 5000 }),
  }));

const data = generateData();

const UserStatsCard = () => {
  const userCount = faker.number.int({ min: 20000, max: 40000 });
  const growth = faker.number.float({ min: 1, max: 15, fractionDigits: 1 });

  return (
    <div className="max-w-sm w-full bg-white rounded-lg shadow-sm p-4 md:p-6">
      <div className="flex justify-between">
        <div>
          <h5 className="leading-none text-3xl font-bold text-gray-900 pb-2">
            {userCount.toLocaleString()}
          </h5>
          <p className="text-base font-normal text-gray-500">Clients this week</p>
        </div>
        <div className="flex items-center text-green-500 font-semibold text-base">
          {growth.toFixed(1)}%
          <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 10 14">
            <path d="M5 13V1M5 1L1 5M5 1l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      <div className="h-32 mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="day" hide />
            <YAxis hide />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="users"
              stroke="#3b82f6"
              fillOpacity={1}
              fill="url(#colorUsers)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="flex justify-between items-center pt-5 text-sm">
        <button className="text-gray-500 hover:text-gray-900">Last 7 days ▾</button>
        
      </div>
    </div>
  );
};

export default UserStatsCard;
