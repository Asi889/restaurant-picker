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

const Slot: React.ForwardRefRenderFunction <any, Props> = (props:any) => {
  
  const {slotTransition, refindex} = props;
  // const [filteredByCategory, filteredByCategorySet] = useState<any>([])
  const allRestaurants = useSelector((state:any) => state.restaurants.fiftyRestaurants) as RestaurantType[];

  

  return (
          <div  key={refindex} className={`w-full max-w-[350px] mx-auto md:max-w-full h-[150px] small-mobile-height min-w-[130px] bg-white  px-1 overflow-hidden rounded-lg border-4 border-black slot-shadow`}>
                    
            <div className="  mx-auto  grid gap-y-8 relative overflow-hidden slot-container ">
              <div  className={`relative   grid gap-y-16  justify-center  slott ${slotTransition ? slotTransition  : "bbotom"} }`}>
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
                            <h2 className="slot-macihne-text leading-7 w-full h-full bg-purple px-1 text-center grid items-center relative text-white alfa text-2xl">
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
export default connect(null,null,null,{ forwardRef: true })(forwardRef(Slot));
