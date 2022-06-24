// SettingsContainer

import React from "react";
import DialogModal from "./DialogModal";
import LocationModal from "./Dialogs/LocationModal";

type Props = {};

const SettingsContainer: React.FC<Props> = (props) => {
  const { } = props;

  return (
    <div className="grid gap-y-5  mt-5 ">
      <DialogModal  />
      <LocationModal />
    </div>
  );
};

export default SettingsContainer;
