// SettingsContainer

import React, { useEffect, useState, createRef } from "react";
import LocationIcon from "./svgs/LocationIcon";
import FiltertIcon from "./svgs/FilterIcon";
import DialogModal from "./DialogModal";
import LocationModal from "./Dialogs/LocationModal";

type Props = {
  setRestaurantAmount:Function;
  selectedproviderSet: Function;
  selectedprovider: string;
  filterTypesSet: Function;
  filterTypes: object;
  filterCategory: Function;

};

const SettingsContainer: React.FC<Props> = (props) => {
  const { setRestaurantAmount, selectedproviderSet, selectedprovider, filterTypesSet, filterTypes, filterCategory} = props;

  return (
    <div className="flex gap-x-10 justify-center mt-5 ">
      <DialogModal setRestaurantAmount={setRestaurantAmount} selectedproviderSet={selectedproviderSet} selectedprovider={selectedprovider} filterTypesSet={filterTypesSet} filterTypes={filterTypes} filterCategory={filterCategory} />
      <LocationModal />
    </div>
  );
};

export default SettingsContainer;
