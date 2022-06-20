import React from 'react';

const Error = ({code, text}) => {
  return (
    <div>
      <h1><span style={{color: 'salmon'}}>{code}.</span> {text}</h1>
    </div>
  );
};

export default Error;