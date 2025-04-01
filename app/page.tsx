'use client';

import { useState } from 'react';
import { HiMicrophone } from 'react-icons/hi';

export default function Home() {
  const [message, setMessage] = useState('');

  const quickActions = [
    { id: 1, text: 'Write a first draft' },
    { id: 2, text: 'Get advice' },
    { id: 3, text: 'Learn something new' },
    { id: 4, text: 'Create an image' },
    { id: 5, text: 'Make a plan' },
    { id: 6, text: 'Brainstorm' },
    { id: 7, text: 'Practice a language' },
    { id: 8, text: 'Take a quiz' },
  ];

  return (
    <div className="min-h-screen bg-[#faf8f5] flex flex-col items-center px-4 py-12">
      <div className="w-full max-w-3xl space-y-8">
        {/* 标题 */}
        <h1 className="text-4xl font-semibold text-gray-800 text-center">
          Hey, what's on your mind<br />today?
        </h1>

        {/* 输入框区域 */}
        <div className="relative">
          <div className="flex items-center bg-white rounded-full shadow-lg">
            <div className="flex items-center pl-4">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-500"></div>
              <span className="mx-2 text-gray-300">+</span>
            </div>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message Copilot"
              className="flex-1 py-4 px-4 bg-transparent outline-none"
            />
            <button className="p-4">
              <HiMicrophone className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        {/* 快捷操作按钮 */}
        <div className="flex flex-wrap gap-2 justify-center">
          {quickActions.map((action) => (
            <button
              key={action.id}
              className="px-4 py-2 rounded-full bg-white text-gray-600 text-sm hover:bg-gray-50 transition-colors shadow-sm"
            >
              {action.text}
            </button>
          ))}
        </div>

        {/* 底部文字 */}
        <p className="text-center text-sm text-gray-500 mt-8">
          Copilot may make mistakes. By interacting with Copilot, you agree to the{' '}
          <a href="#" className="underline">Terms of Use</a>. See our{' '}
          <a href="#" className="underline">Privacy Statement</a>.
        </p>
      </div>
    </div>
  );
}
