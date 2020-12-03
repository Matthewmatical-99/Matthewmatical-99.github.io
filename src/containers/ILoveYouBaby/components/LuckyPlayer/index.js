import React from 'react';

const LuckyPlayer = ({ isPlaying }) => (isPlaying ? 
  <iframe
    title="luckyPlayer"
    width="560"
    height="315"
    src="https://www.youtube.com/embed/4gWbcxNGzgE?autoplay=1"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    style={{ display: "none" }}
  /> : null
);

export default LuckyPlayer;
