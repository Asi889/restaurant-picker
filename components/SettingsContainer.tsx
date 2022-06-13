// SettingsContainer

import React, { useEffect, useState, createRef } from "react";
import LocationIcon from "./svgs/LocationIcon";
import FiltertIcon from "./svgs/FilterIcon";

type Props = {
  filterActiv: boolean;
  filterActivSet: Function;
  locationActiv: boolean;
  locationActivSet: Function;

};

const SettingsContainer: React.FC<Props> = (props) => {
  const {filterActiv, filterActivSet, locationActiv, locationActivSet } = props;

  return (
    <div className="flex gap-x-10 justify-center mt-5 ">
      <LocationIcon locationActiv={locationActiv} locationActivSet={locationActivSet}  givenclass="w-12 h-12 cursor-pointer" />
      <FiltertIcon filterActiv={filterActiv} filterActivSet={filterActivSet} pathClass="fill-white cursor-pointer" givenclass="w-11 h-11 " />
    </div>
  );
};

export default SettingsContainer;
