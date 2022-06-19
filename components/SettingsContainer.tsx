// SettingsContainer

import React from "react";
import DialogModal from "./DialogModal";
import LocationModal from "./Dialogs/LocationModal";

type Props = {};

const SettingsContainer: React.FC<Props> = (props) => {
  const { } = props;

  return (
    <div className="flex gap-x-10 justify-center mt-5 ">
      <DialogModal  />
      <LocationModal />
    </div>
  );
};

export default SettingsContainer;
