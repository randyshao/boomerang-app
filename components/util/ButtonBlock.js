import React from 'react';
import Link from 'next/link';

const ButtonBlock = (props) => {
  return (
    <div style={props.style}>
      <Link href={props.link} target={props.target}>
        <button>{props.children}</button>
      </Link>
    </div>
  );
};

export default ButtonBlock;
