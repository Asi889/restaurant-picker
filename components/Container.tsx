import React, { useState } from "react";
import Restaurants from "./Restaurants";
import SettingsContainer from "./SettingsContainer";
import ChosenRestaurant from "./ChosenRestaurant";
import { connect } from "react-redux";
import AppHeader from "./layout/AppHeader";
import { TitleText } from "./texts/TitleText";
import AppFooter from "./layout/AppFooter";
import { AboutText } from "./texts/AboutText";
interface ContainerProps { }

const Container: React.FC<ContainerProps> = (props) => {
  const [selectedActiv, selectedActivSet] = useState<boolean>(false);
  const [filterActiv, filterActivSet] = useState<boolean>(false);
  const [locationActiv, locationActivSet] = useState<boolean>(false);

  return (
    <div className="w-full min-h-screen bg-purple-dark ">
      <AppHeader />
      <main className="wrapper max-w-3xl mx-auto px-4 pb-16">

        <TitleText />
        <Restaurants selectedActivSet={selectedActivSet} selectedActiv={selectedActiv} />
        <div className="max-w-[380px] mx-auto bg-purple mt-2 pt-2">

          {selectedActiv && <ChosenRestaurant />}
          <SettingsContainer />
        </div>
        <AboutText/>
      </main>
    <AppFooter/>
    </div>
  );
};

export default connect()(Container);
