import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import { connect } from "react-redux";
import ChosenRestaurant from "./ChosenRestaurant";
import FiltersContainer from "./filters/FiltersContainer";
import AppFooter from "./layout/AppFooter";
import AppHeader from "./layout/AppHeader";
import Restaurants from "./Restaurants";
import ArrowDown from "./svgs/ArrowDown";
import Machine from "./svgs/Machine";
import { AboutText } from "./texts/AboutText";
import { TitleText } from "./texts/TitleText";

const Container = () => {
  const [selectedActiv, selectedActivSet] = useState<boolean>(false);
  let [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="w-full min-h-screen bg-purple-dark ">
      <AppHeader />
      <main className="wrapper max-w-3xl mx-auto px-4 pb-16 min-h-screen">
{/* <div className="flex justify-around">

</div> */}
        <TitleText setIsOpen={setIsOpen} IsOpen={isOpen} />
        
        <Restaurants selectedActivSet={selectedActivSet} selectedActiv={selectedActiv} />
        <Transition
          show={selectedActiv}
          enter=" duration-500 ease-in-out"
          enterFrom="opacity-25 max-h-0"
          enterTo="opacity-100 max-h-full"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <ChosenRestaurant />
        </Transition>
        <FiltersContainer setIsOpen={setIsOpen} isOpen={isOpen} />
        <AboutText />
      </main>
      <AppFooter />
    </div>
  );
};

export default connect()(Container);
