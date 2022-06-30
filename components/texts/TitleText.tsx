import React from 'react'
import ArrowDown from '../svgs/ArrowDown'

export const TitleText = () => {
  return (
    <div className="relative ">

    <h2 className='text-white lg:my-10 mt-4 font-thin md:text-2xl'>
      רעבים ולא יודעים מה להזמין? <br />
      <span className="text-green font-bold"> לחצו על הידית  </span>
      ותנו לבוט שלנו להגריל עבורכם מאיפה להזמין 
       </h2>
       <div></div>
       <h2></h2>
       <div className="w-5 h-5 md:w-10 md:h-10 animate-bounce absolute -bottom-[30px] md:bottom-auto right-3 md:right-0">
        <ArrowDown />
        </div>
    </div>
  )
}
