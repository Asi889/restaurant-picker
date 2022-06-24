import React, { useEffect, useState, Fragment, createRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useTimeoutFn } from "react-use";
import LocationIcon from "../svgs/LocationIcon";
import FilterLocation from "../FilterLocation";
type Props = {
  //   filterTypesSet: Function;
  //   filterTypes: any; //FilteredTypes
  //   filteredRestaurantsSet: Function;
  //   filteredRestaurants: Array<object>
  //   selectedproviderSet: Function;
  //   selectedprovider: string
  //   setRestaurantAmount: Function;
};

const LocationModal: React.FC<Props> = (props) => {
  let [isOpen, setIsOpen] = useState<boolean>(false);
  // let [, , resetIsShowing] = useTimeoutFn(() => setIsOpen(true), 500)

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className=" inset-0 flex ">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
                  <LocationIcon   givenclass="w-12 md:w-24 h-12 md:h-24 " />

        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="transform transition duration-[400ms]"
                enterFrom="opacity-0 rotate-[-120deg] scale-50"
                enterTo="opacity-100 rotate-0 scale-100"
                leave="transform duration-200 transition ease-in-out"
                leaveFrom="opacity-100 rotate-0 scale-100 "
                leaveTo="opacity-0 scale-95 "
              >
                <Dialog.Panel className="w-full max-w-md h-full transform overflow-hidden rounded-2xl bg-white p-4 text-left align-middle shadow-xl transition-all">
                  
                  <FilterLocation closeModal={closeModal} />

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default LocationModal;
