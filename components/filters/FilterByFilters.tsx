import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { returnFilters, returnSubFilters } from "../../src/utils";
import FilterFoodType from "../FilterFoodType";
import FiltertIcon from "../svgs/FilterIcon";


const FilterByFilters = () => {
  let [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div className="flex h-12 relative">
        <button
          type="button"
          onClick={()=> setIsOpen(true)}
          className="absolute z-10 rounded-2xl bg-purple h-full w-12 grid place-content-center p-4 font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          <span className="sr-only">פילטור לפי משתנים</span>

          <FiltertIcon pathClass="fill-white cursor-pointer" givenclass="w-8 h-8" />

        </button>
        <div className="rounded-2xl overflow-hidden bg-[#7b4863] flex-grow  alfa pr-16 text-xl text-whit truncate text-white h-full  flex place-items-center">
          <span>
            {returnFilters()}
          </span>
          <div className="flex gap-x-2">
            <span>{returnSubFilters()}</span>
          </div>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40" onClose={() => setIsOpen(false)}>
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
                <Dialog.Panel className="w-full max-w-md h-full transform overflow-auto rounded-2xl bg-white p-4 text-left align-middle shadow-xl transition-all ">

                  <FilterFoodType closeModal={()=>setIsOpen(false)} />

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default FilterByFilters;
