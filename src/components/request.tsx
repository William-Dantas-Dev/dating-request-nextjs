"use client";
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Request: React.FC = () => {
  const [noButtonPosition, setNoButtonPosition] = useState({ top: '50%', left: '50%' });

  const moveNoButton = () => {
    const randomTop = Math.floor(Math.random() * 100); // posição aleatória de 0% a 100% na vertical
    const randomLeft = Math.floor(Math.random() * 100); // posição aleatória de 0% a 100% na horizontal
    setNoButtonPosition({ top: `${randomTop}%`, left: `${randomLeft}%` });
  };

  const handleSimClick = () => {
    toast.success("Que maravilha! 🌟💌 Você aceitou! Estou com um sorriso de orelha a orelha! 😄💖", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 overflow-hidden">
      <h1 className="text-4xl font-bold mb-8 text-white">Quer namorar comigo?</h1>
      <div className="relative flex justify-center items-center w-full h-full">
        <button
          className="bg-green-500 text-white px-6 py-2 rounded-full text-lg hover:bg-green-600 transition mr-36"
          onClick={handleSimClick}
        >
          Sim
        </button>
        <button
          style={{ 
            position: 'absolute', 
            top: noButtonPosition.top, 
            left: noButtonPosition.left, 
            transform: 'translate(0%, -50%)' 
          }}
          className="bg-red-500 text-white px-6 py-2 rounded-full text-lg hover:bg-red-600 transition"
          onMouseEnter={moveNoButton}
        >
          Não
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Request;
