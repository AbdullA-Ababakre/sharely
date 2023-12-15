import React from 'react';
import './index.css'; // Make sure to create a corresponding CSS file

const DemoButton = ({ onClick }) => {

  return (
    <button className="demoButton" onClick={onClick}>
      Get started
    </button>
  );
};

export default DemoButton;