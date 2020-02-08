import React from 'react';

const Icon = (props) => {
  const { number, href, alt, src, size, paddingRight } = props;
  return (
    <span className={`icon ${number}`} style={{ paddingRight: `${paddingRight}` }}>
      <a href={`${href}`}>
        <img src={`${src}`} alt={`${alt}`} height={`${size}`} width={`${size}`} />
      </a>
    </span>
  );
};

export default Icon;
