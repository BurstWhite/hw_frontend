// components/SideNav.tsx
import React from 'react';

const SideNav: React.FC = () => {
  return (
    <div className="h-full fixed z-10 top-0 left-0 bg-gray-900 overflow-x-hidden pt-20 w-64">
      <a href="/dashboard" className="block px-8 py-4 text-white text-lg hover:bg-gray-700">仪表盘</a>
      <a href="/dashboard/homework" className="block px-8 py-4 text-white text-lg hover:bg-gray-700">作业列表</a>
      <a href="/dashboard/submission" className="block px-8 py-4 text-white text-lg hover:bg-gray-700">提交情况</a>
      <a href="/dashboard/student" className="block px-8 py-4 text-white text-lg hover:bg-gray-700">学生列表</a>
    </div>
  );
};

export default SideNav;
