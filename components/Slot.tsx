/* eslint-disable react/jsx-key */
import React, { forwardRef } from "react";
import Image from "next/image";
import { shuffle } from "../src/hooks/shuffle";
import {myImageLoader} from '../src/hooks/myImageLoader';
import SelectedAndTop from './SelectedAndTop';
import { connect,useSelector } from "react-redux";
import { splitAndTrim } from "../src/utils";

type Props = {
  slotTransition: boolean;
  refindex:number
  ref: any
};

const Slot: React.ForwardRefRenderFunction <any, Props> = (props:any, ref: any) => {
  
  const {slotTransition, refindex} = props;
  // const [filteredByCategory, filteredByCategorySet] = useState<any>([])
  const allRestaurants = useSelector((state:any) => state.restaurants.fiftyRestaurants)

  

  return (
          <div  key={refindex} className="w-full border bg-white border-red-200 px-1   overflow-hidden ">
            <div className="  mx-auto  grid gap-y-8 relative overflow-hidden slot-container ">

              
              <div ref={ref} className={`relative   grid gap-y-16  justify-center  slott ${slotTransition ? slotTransition  : "bbotom"} }`}>
              <SelectedAndTop index={refindex}  />
          
                {allRestaurants &&
                  shuffle(allRestaurants)?.map(
                
                    (restaurant: any, index: number) => {
                        return (
                          <div className={` rounded-full text-center relative img-wrapper `} key={index}>
                            {restaurant?.image?.includes("wolt")
                             ? 
                            <div className="font-bold text-base bg-[#280F3F] h-[70px] text-center grid items-center text-white">
                              {splitAndTrim(restaurant?.title)}
                            </div>
                            : 
                            <div className="w-16 h-16 img-wrap">

                              <Image
                                loader={() => myImageLoader(restaurant?.image)}
                                src={restaurant?.image ? restaurant?.image : "https://tenbis-static.azureedge.net/restaurant-cuisine-type-icon-image/asianFusion.png" }
                                alt="alt"
                                layout="fill" 
                                className="w-[400px] h-[100px] rounded-full "
                              />
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
