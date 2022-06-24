// SettingsContainer

import React, { useEffect, useState, createRef } from "react";
import LocationIcon from "./svgs/LocationIcon";
import FiltertIcon from "./svgs/FilterIcon";

type Props = {
  closeModal: any; // Function?
};
const FilterLocation: React.FC<Props> = (props) => {
  const { closeModal } = props;
  const cities = ["תל אביב", "ירושלים", "חיפה", "הרצליה", "עכו"];

  return (
    <div className="bg-[#FFFFFF]   pt-4 left-0 right-0 mx-auto  mt-4 z-40">
      <div className="flex justify-between">
        <h2>פילטר מיקום</h2>
        <button onClick={closeModal}>
          <span>X</span>
        </button>
      </div>
      <div className="grid justify-center text-center">
        <LocationIcon givenclass="w-12 md:w-24 h-12 md:h-24 stroke-black " />
        {/* <div> */}

        <h3 className="font-bold">להשתמש במיקום הנוכחי שלי</h3>
        {/* </div> */}
        {/* <div> */}

        <h3 className="font-bold ">
          מומלץ לקבלת תוצאות טובות יותר (יש לתת הרשאות)
        </h3>
        {/* </div> */}
      </div>
      <div className="w-full mx-auto h-[1px] bg-purple-dark mt-2"></div>

      <ul className="text-center">
        {cities.map((city) => (
          <li className="w-full  active:bg-[#F7F5F5] text-purple-dark py-4 cursor-pointer " key={city}>
            {city}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterLocation;
