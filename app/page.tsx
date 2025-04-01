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
    <div className="min-h-screen bg-[#fdf6f0] flex flex-col items-center px-4 py-16">
      <div className="w-full max-w-2xl space-y-12">
        {/* 标题 */}
        <h1 className="text-[2.5rem] leading-tight font-semibold text-gray-800 text-center">
          Hi there. What should we<br />dive into today?
        </h1>

        {/* 输入框区域 */}
        <div className="relative">
          <div className="flex items-center bg-white rounded-[24px] shadow-[0_2px_16px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_24px_rgba(0,0,0,0.08)] transition-shadow">
            <div className="flex items-center pl-5">
              <div className="w-7 h-7 rounded-full bg-gradient-to-r from-[#4355f3] to-[#a072ff] flex items-center justify-center">
                <img src="/copilot-icon.svg" alt="Copilot" className="w-4 h-4" />
              </div>
              <span className="mx-2 text-gray-300 text-lg">+</span>
            </div>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message Copilot"
              className="flex-1 py-5 px-4 bg-transparent outline-none text-[15px] placeholder:text-gray-400"
            />
            <button className="p-5 hover:bg-gray-50 rounded-r-[24px] transition-colors">
              <HiMicrophone className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        {/* 快捷操作按钮 */}
        <div className="flex flex-wrap gap-3 justify-center">
          {quickActions.map((action) => (
            <button
              key={action.id}
              className="px-5 py-2.5 rounded-full bg-white text-[15px] text-gray-600 hover:bg-gray-50 transition-all shadow-[0_2px_8px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
            >
              {action.text}
            </button>
          ))}
        </div>

        {/* 底部文字 */}
        <p className="text-center text-[13px] text-gray-500">
          Copilot may make mistakes. By interacting with Copilot, you agree to the{' '}
          <a href="#" className="underline hover:text-gray-600 transition-colors">Terms of Use</a>. See our{' '}
          <a href="#" className="underline hover:text-gray-600 transition-colors">Privacy Statement</a>.
        </p>
      </div>
    </div>
  );
}
