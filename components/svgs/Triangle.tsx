import React, { useEffect, useState, createRef } from "react";

type Props = {
    givenclass: any;
  
};

const Triangle: React.FC<Props> = (props) => {
  const {givenclass} = props;

  return (
    <svg className={givenclass}  viewBox="-50 -50 300 300">
      <polygon
        className="fill-[#F34D52] stroke-[#FED786] stroke-[20px]"
        strokeLinejoin="round"
        points="100,0 0,200 200,200"
      />
    </svg>
  );
};

export default Triangle;
