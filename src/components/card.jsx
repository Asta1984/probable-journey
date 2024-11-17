import React from 'react';

const Card_style = ({ children }) => {
    return (
        <div style={{
            border: '1px solid #ccc',
            borderRadius: '5px',
            padding: '20px',
            margin: '10px',
            boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
        }}>
            {children}
        </div>
    );
};

export function Card() {
    return (
        <div>
            <Card_style>
                <h2>Card Title</h2>
                <p>This is some content inside the card.</p>
            </Card_style>
            <Card_style>
                <h2>Another Card</h2>
                <p>This card has different content!</p>
            </Card_style>
        </div>
    );
};
