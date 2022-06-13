import React, { useEffect, useState, createRef } from "react";
import PropTypes from 'prop-types';
import NavBar from "../NavBar";


type Props = {
  //   filterTypesSet: Function;
  //   filterTypes: any; //FilteredTypes
  //   filteredRestaurantsSet: Function;
  //   filteredRestaurants: Array<object>
  //   selectedproviderSet: Function;
  //   selectedprovider: string
  //   setRestaurantAmount: Function;
};

const Layout: React.FC = () => {
  

  return (
    <section className="min-h-screen overflow-hidden md:flex  bg-lightgreybackground wrapper ">
    <NavBar /> 
    {/* <main className="main flex-grow md: mx-auto main-layout">{children}</main> */}
  </section>
  );
};
Layout.prototype = {
    children: PropTypes.any,
  };

export default Layout;
