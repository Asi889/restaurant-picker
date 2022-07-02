import React from "react";

type Props = {
  givenclass: string;
  pathClass: string;
};

const FilterIcon: React.FC<Props> = (props) => {
  const { givenclass, pathClass } = props;

  return (
    <svg
    
    className={givenclass}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    >
      <path
      className={pathClass}
        fill="currentColor"
        d="M9 5a1 1 0 100 2 1 1 0 000-2zM6.17 5a3.001 3.001 0 015.66 0H19a1 1 0 110 2h-7.17a3.001 3.001 0 01-5.66 0H5a1 1 0 010-2h1.17zM15 11a1 1 0 100 2 1 1 0 000-2zm-2.83 0a3.001 3.001 0 015.66 0H19a1 1 0 110 2h-1.17a3.001 3.001 0 01-5.66 0H5a1 1 0 110-2h7.17zM9 17a1 1 0 100 2 1 1 0 000-2zm-2.83 0a3.001 3.001 0 015.66 0H19a1 1 0 110 2h-7.17a3.001 3.001 0 01-5.66 0H5a1 1 0 110-2h1.17z"
      ></path>
    </svg>
  );
};

export default FilterIcon;
