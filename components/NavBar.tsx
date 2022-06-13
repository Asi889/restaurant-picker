import React, { useEffect, useState, createRef } from "react";

type Props = {
  //   filterTypesSet: Function;
  //   filterTypes: any; //FilteredTypes
  //   filteredRestaurantsSet: Function;
  //   filteredRestaurants: Array<object>
  //   selectedproviderSet: Function;
  //   selectedprovider: string
  //   setRestaurantAmount: Function;
};

const NavBar: React.FC<Props> = (props) => {
  const {} = props;

  return (
    <div className="w-full h-[75px]  bg-[#280F3F] text-center">
      <div className="grid">
        <h1 className="text-[32px] leading-10 text-white">{`What's 4 Dinner`}</h1>
        <h2 className="text text-sm text-[#17E38A] ">{`(Or lunch)`}</h2>
      </div>
    </div>
  );
};

export default NavBar;
