import React from 'react';

const raccoonWhite = 'E9E3D6';
const darkBrown = '322924';
const lightBrown = '645750';

const RaccoonFace = () => (
  <svg width="131" height="32">
    <rect x="0" y="0" width="131" height="32" style={{ fill: 'black'}} />
    <text x="0" y="13" style={{ fill: 'white'}}>racc</text>
    <text x="120" y="13" style={{ fill: 'white'}}>n</text>
    <ellipse cx="75" cy="16" rx="45" ry="16" style={{ fill: raccoonWhite }} />
    <rect x="66" y="6" height="9" width="18" style={{ fill: lightBrown }} />
    <polygon points="71,6 79,6 75,0" style={{ fill: lightBrown }} />
    <rect
      x="36" y="2" height="16" width="35" ry="100" rx="13"
      style={{ fill: darkBrown }}
      transform="rotate(-30 63 10)"
    />
    <rect
      x="79" y="2" height="16" width="35" ry="100" rx="13"
      style={{ fill: darkBrown }}
      transform="rotate(30 87 10)"
    />
    <circle cx="63" cy="10" r="3" style={{ fill: 'black', stroke: 'white', strokeWidth: 1 }} />
    <circle cx="87" cy="10" r="3" style={{ fill: 'black', stroke: 'white', strokeWidth: 1 }} />
    <rect x="72" y="15" height="7" width="6" style={{ fill: lightBrown }} />
    <rect x="69" y="19" width="12" height="8" rx="50" ry="80" />
    <path d="M 65 27 Q 75 32, 85 27" style={{ fill: 'none', stroke: 'black', strokeWidth: 1 }} />
  </svg>
);

export default RaccoonFace;
