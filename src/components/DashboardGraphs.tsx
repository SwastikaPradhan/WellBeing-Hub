'use client';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, ResponsiveContainer } from 'recharts';

export function DashboardGraphs({ activityData, nutritionData, journalData }: any) {
  return (
    <div className="p-6 grid grid-cols-2 gap-6">
      
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="font-semibold text-lg mb-2">Steps Over Time</h2>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={activityData}>
            <XAxis dataKey="day" />
            <YAxis />
            <CartesianGrid stroke="#ccc" />
            <Tooltip />
            <Line type="monotone" dataKey="steps" stroke="#4CAF50" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="font-semibold text-lg mb-2">Calorie Intake</h2>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={nutritionData}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="calories" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

     
      <div className="col-span-2 bg-white p-4 rounded-lg shadow">
        <h2 className="font-semibold text-lg mb-2">Mood Over Time</h2>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={journalData}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="moodScore" stroke="#00bcd4" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
