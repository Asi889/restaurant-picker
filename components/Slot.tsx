/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React, { forwardRef } from "react";
import Image from "next/image";
import { shuffle } from "../src/hooks/shuffle";
import { myImageLoader } from '../src/hooks/myImageLoader';
import SelectedAndTop from './SelectedAndTop';
import { connect, useSelector } from "react-redux";
import { splitAndTrim } from "../src/utils";
import { RestaurantType } from "../src/types/FetchRestaurantTyp";

type Props = {
  slotTransition: boolean;
  refindex: number
  firstMessage: boolean;
  firstMessageEffect: boolean;
};

const Slot: React.ForwardRefRenderFunction<any, Props> = (props: any) => {

  const { slotTransition, refindex, firstMessage, firstMessageEffect } = props;
  // const [filteredByCategory, filteredByCategorySet] = useState<any>([])
  const allRestaurants = useSelector((state: any) => state.restaurants.fiftyRestaurants) as RestaurantType[];



  return (
    <div key={refindex} className={`slot-machine-wrapper w-full max-w-[350px] mx-auto md:max-w-full h-[150px] small-mobile-height min-w-[130px]  px-1 overflow-hidden rounded-lg border-4 border-black slot-shadow`}>

      <div className="mx-auto  grid gap-y-8 relative overflow-hidden slot-container ">
        {!firstMessage ? <div className={`w-full h-[150px] md:h-[205px] bg-purple absolute z-30  place-content-center text-white  ${firstMessageEffect ? "hidden" : "grid"}`}> <h2 className=" text-3xl ">משיכה בידית</h2><h3 className=" text-1xl text-green">{` ותגלו איזה מאנץ׳ להזמין`}</h3></div> : ""}

        <div className={`relative   grid gap-y-2  justify-center  slott ${slotTransition ? slotTransition : "bbotom"} }`}>
          <SelectedAndTop index={refindex} />
          <div className={`grid gap-y-2 mt-2 `} >

            {allRestaurants &&
              shuffle(allRestaurants)?.map(

                (restaurant: RestaurantType, index: number) => {
                  return (
                    <div className={` rounded-full text-center relative img-wrapper h-[120px]`} key={index}>
                      {restaurant?.photo?.logo
                        ?
                        <img
                          src={restaurant?.photo?.logo}
                          alt="alt"
                          className="w-full h-full object-contain"
                        />

                        :
                        <h2 className="slot-macihne-text leading-7 bg-purple text-center grid items-center relative text-white alfa text-2xl w-full h-full rounded-lg">
                          {splitAndTrim(restaurant?.title)}
                        </h2>
                      }

                    </div>
                  );
                }
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

// export default React.forwardRef(Slot);
export default connect(null, null, null, { forwardRef: true })(forwardRef(Slot));
