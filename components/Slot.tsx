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
  ref: any
};

const Slot: React.ForwardRefRenderFunction <any, Props> = (props:any, ref: any) => {
  
  const {slotTransition, refindex} = props;
  // const [filteredByCategory, filteredByCategorySet] = useState<any>([])
  const allRestaurants = useSelector((state:any) => state.restaurants.fiftyRestaurants) as RestaurantType[];

  

  return (
          <div  key={refindex} className="w-full border bg-white border-red-200 px-1   overflow-hidden ">
            <div className="  mx-auto  grid gap-y-8 relative overflow-hidden slot-container ">

              
              <div ref={ref} className={`relative   grid gap-y-16  justify-center  slott ${slotTransition ? slotTransition  : "bbotom"} }`}>
              <SelectedAndTop index={refindex}  />
          
                {allRestaurants &&
                  shuffle(allRestaurants)?.map(
                
                    (restaurant: RestaurantType, index: number) => {
                        return (
                          <div className={` rounded-full text-center relative img-wrapper `} key={index}>
                            {restaurant?.photo?.logo
                             ? 
                             <img
                             src={restaurant?.photo?.logo }
                             alt="alt"
                             className="w-[400px] h-[100px] rounded-full mx-auto"
                           />
                         
                            : 
                            <div className="font-bold text-base bg-purplekh-[70px] text-center grid items-center text-white">
                              {splitAndTrim(restaurant?.title)}
                            </div>
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
export default connect(null,null,null,{ forwardRef: true })(forwardRef(Slot));
