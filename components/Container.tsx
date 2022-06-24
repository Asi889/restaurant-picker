import React, { useState } from "react";
import Restaurants from "./Restaurants";
import NavBar from "./NavBar";
import SettingsContainer from "./SettingsContainer";
import ChosenRestaurant from "./ChosenRestaurant";
import { connect } from "react-redux";
interface ContainerProps {}

const Container: React.FC<ContainerProps> = (props) => {
  const [selectedActiv, selectedActivSet] = useState<boolean>(false);
  const [filterActiv, filterActivSet] = useState<boolean>(false);
  const [locationActiv, locationActivSet] = useState<boolean>(false);

  return (
    <div className="w-full h-screen bg-[#3C1E57] text-center">
      <NavBar />
      <Restaurants selectedActivSet={selectedActivSet} selectedActiv={selectedActiv}  />
      <div className="max-w-[380px] mx-auto bg-[#280f3f] mt-2 pt-2">

      {selectedActiv && <ChosenRestaurant />}
        <SettingsContainer />
      </div>
    </div>
  );
};

export default connect()(Container);
