import React from 'react';

const Styles = ({ furniture_style }) => {
  if (!furniture_style.length) {
    return <></>;
  }

  return (
    furniture_style.map((style) =>
      <p className="styles">{style}</p>
    )
  )
};

export default Styles;