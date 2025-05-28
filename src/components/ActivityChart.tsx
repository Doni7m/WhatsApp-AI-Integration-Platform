import React from 'react';

const ActivityChart: React.FC = () => {
  // In a real application, this would use a proper charting library
  // like Chart.js, Recharts, or Victory
  return (
    <div className="h-64 w-full">
      <div className="flex h-full flex-col">
        <div className="flex-1 flex items-end space-x-2">
          <div className="w-1/7 bg-emerald-500 rounded-t" style={{ height: '60%' }}></div>
          <div className="w-1/7 bg-emerald-500 rounded-t" style={{ height: '80%' }}></div>
          <div className="w-1/7 bg-emerald-500 rounded-t" style={{ height: '65%' }}></div>
          <div className="w-1/7 bg-emerald-500 rounded-t" style={{ height: '90%' }}></div>
          <div className="w-1/7 bg-emerald-500 rounded-t" style={{ height: '70%' }}></div>
          <div className="w-1/7 bg-emerald-500 rounded-t" style={{ height: '55%' }}></div>
          <div className="w-1/7 bg-emerald-500 rounded-t" style={{ height: '40%' }}></div>
        </div>
        <div className="flex justify-between pt-4 text-xs text-gray-500">
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
          <div>Sun</div>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <div className="flex items-center">
          <div className="h-3 w-3 rounded-full bg-emerald-500 mr-2"></div>
          <span className="text-xs text-gray-500">Messages</span>
        </div>
        <div className="text-xs text-gray-500">Total: 1,254 messages this week</div>
      </div>
    </div>
  );
};

export default ActivityChart;