/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React, { forwardRef } from "react";
import Image from "next/image";
import { shuffle } from "../src/hooks/shuffle";
import {myImageLoader} from '../src/hooks/myImageLoader';
import SelectedAndTop from './SelectedAndTop';
import { connect,useSelector } from "react-redux";
import { splitAndTrim } from "../src/utils";
import { RestaurantType } from "../src/types/FetchRestaurantTyp";

type Props = {
  slotTransition: boolean;
  refindex:number
};

const SlotCheck: React.ForwardRefRenderFunction <any, Props> = (props:any) => {
  
  const {slotTransition, refindex} = props;
  // const [filteredByCategory, filteredByCategorySet] = useState<any>([])
  const allRestaurants = useSelector((state:any) => state.restaurants.fiftyRestaurants) as RestaurantType[];

  

  return (
          <div  key={refindex} className={`SlotCheck w-full max-w-[232px] mx-auto md:max-w-full h-[114px] top-[99px] right-[77px] small-mobile-height min-w-[130px]  px-1 overflow-hidden rounded-lg border-2 border-black slot-shadow absolute`}>
                    
            <div className="  mx-auto  grid gap-y-8 relative overflow-hidden slot-container ">
              <div  className={`relative  justify-center  slott ${slotTransition ? slotTransition  : "bbotom"} }`}>
              <SelectedAndTop index={refindex}  />
          
                {allRestaurants &&
                  shuffle(allRestaurants)?.map(
                
                    (restaurant: RestaurantType, index: number) => {
                        return (
                          <div className={` rounded-full text-center relative img-wrapper h-[120px]`} key={index}>
                            {restaurant?.photo?.logo
                             ? 
                             <img
                             src={restaurant?.photo?.logo }
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
  );
};

// export default React.forwardRef(Slot);
export default connect(null,null,null,{ forwardRef: true })(forwardRef(SlotCheck));
