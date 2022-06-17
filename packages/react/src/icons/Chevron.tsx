import React from 'react';

interface ChevronIcon {
    color?: string;
}

const ChevronIcon = ({ color }: ChevronIcon) => {
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32">
            <g>
                <g>
                    <polygon points="9,31.2 8.3,30.5 22.7,15.9 8.3,1.4 9,0.7 24.1,15.9" fill={color || '#347E7D'} />
                </g>
            </g>
        </svg>
    )
}

export default ChevronIcon;