'use client';

import { useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        {/* 顶部标题栏 */}
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-xl font-semibold text-gray-800">AI Chat</h1>
        </div>
        
        {/* 聊天消息区域 */}
        <div className="h-[600px] overflow-y-auto p-4 space-y-4">
          {/* 用户消息 */}
          <div className="flex justify-end">
            <div className="bg-blue-500 text-white rounded-lg py-2 px-4 max-w-[70%]">
              <p>你好，请帮我写一个Python爬虫程序</p>
            </div>
          </div>
          
          {/* AI回复 */}
          <div className="flex justify-start">
            <div className="bg-gray-100 text-gray-800 rounded-lg py-2 px-4 max-w-[70%]">
              <p>好的，我来帮你写一个简单的Python爬虫程序。这个程序将使用requests库来获取网页内容，使用BeautifulSoup来解析HTML。</p>
              <pre className="mt-2 bg-gray-200 p-2 rounded text-sm overflow-x-auto">
                {`import requests
from bs4 import BeautifulSoup

def fetch_webpage(url):
    response = requests.get(url)
    return response.text

def parse_html(html):
    soup = BeautifulSoup(html, 'html.parser')
    return soup

# 使用示例
url = "https://example.com"
html = fetch_webpage(url)
soup = parse_html(html)
print(soup.title.string)`}
              </pre>
            </div>
          </div>
        </div>
        
        {/* 输入框区域 */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex space-x-4">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="输入消息..."
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
            />
            <button 
              onClick={() => setMessage('')}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              发送
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
