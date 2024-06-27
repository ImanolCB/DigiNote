// import React from 'react';

interface IButton {
  type: 'button' | 'submit' | 'reset';
  name?: string;
  value?: any;
  content?: string;
}

export default function Button({ type, name, value, content='Button' }: IButton) {
  return (
    <button
      type={type}
      name={name}
      value={value}
      className="text-white bg-sky-500 hover:bg-white/30 hover:text-gray-800 px-4 py-2 border border-sky-500 rounded-lg transition duration-500"
    >
      {content}
    </button>
  );
}
