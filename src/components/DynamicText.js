import React, { useEffect } from 'react';

const DynamicText = () => {
  useEffect(() => {
    const target = document.getElementById('text-target');
    let array = ["React", "PHP", "MYSQL", "JS"];
    let wordIndex = 0;
    let letterIndex = 0;

    const createWord = () => {
      target.textContent = array[wordIndex];
    };

    const loop = () => {
      setTimeout(() => {
        if (wordIndex >= array.length) {
          wordIndex = 0;
        }

        if (letterIndex === 0) {
          createWord();
        }

        if (letterIndex < array[wordIndex].length) {
          letterIndex++;
        } else {
          setTimeout(() => {
            letterIndex = 0;
            wordIndex++;
            loop();
          }, 2000);
          return;
        }

        loop();
      }, 500);
    };

    loop();
  }, []);

  return (
    <span className="dynamic-text">
      <span>Integrateur Developpeur web</span>
      <span id='text-target'></span>
    </span>
  );
};

export default DynamicText;
