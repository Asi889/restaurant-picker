import React, { useEffect, useState, createRef } from "react";
import PropTypes from 'prop-types';
import NavBar from "../NavBar";
import Home from "../../pages/index"


type Props = {
  //   filterTypesSet: Function;
  //   filterTypes: any; //FilteredTypes
  //   filteredRestaurantsSet: Function;
  //   filteredRestaurants: Array<object>
  //   selectedproviderSet: Function;
  //   selectedprovider: string
  //   setRestaurantAmount: Function;
};

const Layout = ({children}:{children: React.ReactNode}) => {
  

  return (
    <section className="">
    <main className="">{children}</main>
  </section>
  );
};
Layout.prototype = {
    children: PropTypes.any,
  };

export default Layout;
