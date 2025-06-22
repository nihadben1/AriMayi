import React from 'react';

type CardProps = {
    children: React.ReactNode;
};

function Card({ children }: CardProps) {
    return (
        <div className="border border-gray-300 rounded-lg p-4 w-52 text-center">
            <span className="text-xl font-bold">{children}</span>
        </div>
    );
}

export default Card;