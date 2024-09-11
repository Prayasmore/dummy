import React from 'react';

const Iframe = ({ url, description }) => {
  return <iframe src={url} title={description}></iframe>;
};

export default Iframe;
