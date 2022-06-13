// SettingsContainer

import React, { useEffect, useState, createRef } from "react";
import LocationIcon from "./svgs/LocationIcon";
import FiltertIcon from "./svgs/FilterIcon";

type Props = {
    locationActiv: boolean;
    locationActivSet: Function;

};
const FilterLocation: React.FC<Props> = (props) => {
  const { locationActivSet,locationActiv} = props;

  return (
    <div className="bg-[#FFFFFF]  max-w-[90%] h-[80%]  pt-4 left-0 right-0 mx-auto absolute mt-4 z-40">
        <a onClick={()=>locationActivSet(!locationActiv)} href="">
        <span>X</span>
        </a>
     <h2>
        פילטר מיקום
     </h2>
    </div>
  );
};

export default FilterLocation;
