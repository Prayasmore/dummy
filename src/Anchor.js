import React from 'react';

const Anchor = ({ url, text }) => {
  return <a href={url}>{text}</a>;
};

export default Anchor;