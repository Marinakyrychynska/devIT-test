import React, { useState } from 'react';

const CensoredText = ({ badWords, text }) => {
  const [originalText, setOriginalText] = useState(text);

  const censorWords = () => {
    const words = text.split(' ');
    const censoredWords = words.map(word => {
      const censored = badWords.includes(word.toLowerCase()) ? '*'.repeat(word.length) : word;
      return censored;
    });
    return censoredWords.join(' ');
  };

  const showOriginal = () => {
    setOriginalText(text);
  };

  return (
    <span onClick={showOriginal}>
      {originalText !== text ? censorWords() : text}
    </span>
  );
};

export default CensoredText;