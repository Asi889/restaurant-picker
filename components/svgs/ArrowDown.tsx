import React from "react";

type Props = {
//   givenclass: string;
//   pathClass: string;
};

const ArrowDown: React.FC<Props> = (props) => {
//   const { givenclass, pathClass, } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 32 32"
      version="1.1"
      viewBox="0 0 32 32"
      xmlSpace="preserve"
      className="fill-green"
    >
      <path d="M16 29c-.3 0-.5-.1-.7-.3L7 20.4c-.6-.6-.7-1.4-.4-2.2s1-1.2 1.8-1.2H12V5c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v12h3.6c.8 0 1.5.5 1.8 1.2s.1 1.6-.4 2.2l-8.3 8.3c-.2.2-.4.3-.7.3z"></path>
    </svg>
  );
};

export default ArrowDown;
