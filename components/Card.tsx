import React from 'react';

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => (
  <div className="absolute bottom-10 left-10 bg-white p-6 rounded shadow-lg max-w-sm">
    <h2 className="text-lg font-bold">{title}</h2>
    <p className="text-gray-700 mt-2">{description}</p>
  </div>
);

export default Card;
