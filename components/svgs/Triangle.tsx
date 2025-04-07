import React, { useEffect, useState, createRef } from "react";

type Props = {
  givenclass: any;
};

const Triangle: React.FC<Props> = (props) => {
  const { givenclass } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={givenclass}
      fill="none"
      viewBox="0 0 61 49"
    >
      <path
        fill="#F34D52"
        stroke="#FED786"
        strokeWidth="7"
        d="M53.351 29.674l-42.484 15.33C7.282 46.297 3.5 43.64 3.5 39.83V9.17c0-3.811 3.782-6.467 7.367-5.174l42.484 15.33c4.844 1.748 4.844 8.6 0 10.348z"
      ></path>
    </svg>
  );
};

export default Triangle;
