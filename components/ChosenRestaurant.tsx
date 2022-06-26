/* eslint-disable @next/next/no-img-element */
import React from "react";
import { connect, useStore } from "react-redux";
import { RestaurantType } from "../src/types/FetchRestaurantTyp";
import { StateProp } from "../src/types/FetchSubRestaurantTypes";
import { checkTime, splitAndTrim } from "../src/utils";
import TenBisLogo from "./svgs/TenBisLogo";
import WoltLogo from "./svgs/WoltLogo";

interface Props { }

const ChosenRestaurant: React.FC<Props> = (props) => {
  // const {} = props;
  const store = useStore();
  const state = store.getState() as StateProp;
  const selectedRestaurant = state?.restaurants.selectedRestaurant

  const CheckProviders = () => {
    const provider = selectedRestaurant.provider;
    const providerFind = selectedRestaurant.provider === "wolt" ? "tenbisRestaurants" : "woltRestaurants";
    const otherProvider = state.restaurants.allRestaurants[providerFind].find((restaurant: RestaurantType) =>
      restaurant.name.toLocaleLowerCase() === splitAndTrim(selectedRestaurant.name).toLowerCase()
    );

    return (
      <div className={`flex mt-3 mb-5 justify-center gap-x-5 px-2 `}>

        <a className="flex w-1/2 bg-white/20 p-2 rounded-2xl flex-col justify-center space-y-1 text-center" target="_blank" rel="noopener noreferrer" href={selectedRestaurant?.link?.url}>
          <div className="w-full px-2 h-full flex items-center justify-center">
            {provider === 'wolt' ? <WoltLogo /> : <TenBisLogo />}
          </div>
          <p>להזמנה דרך
            &nbsp;
            {provider === 'wolt' ? 'וולט' : 'תן ביס'}
          </p>
        </a>
        {otherProvider && (
          <a className="flex w-1/2 bg-white/20 p-2 rounded-2xl flex-col justify-center space-y-1 text-center" target="_blank" rel="noopener noreferrer" href={otherProvider?.link?.url}>
            <div className="w-full px-2 h-full flex items-center justify-center">

              {otherProvider.provider === 'wolt' ? <WoltLogo /> : <TenBisLogo />}
            </div>
            <p>להזמנה דרך
              &nbsp;
              {otherProvider.provider === 'wolt' ? 'וולט' : 'תן ביס'}
            </p>
          </a>
        )}
      </div>
    );
  };

  return (

    <section className="bg-purple text-white mt-6 rounded-xl pt-4 w-full border border-green overflow-hidden">
      <div className="px-1">
        <h2 className="text-white text-center mb-4 text-xl">
          <span>{checkTime()}</span>
          &nbsp;
          <b className="text-green">
            {splitAndTrim(selectedRestaurant?.title)}
          </b>
        </h2>
        {selectedRestaurant?.photo?.logo && (
          <div className="w-10 h-10 mx-auto">
            <img className="w-full object-contain" src={selectedRestaurant?.photo?.logo} alt={selectedRestaurant?.title} />
          </div>
        )}
        <CheckProviders />

        <ul className="space-y-1 mt-3 pb-4">

          <li>ציון: <span className="text-green">{selectedRestaurant?.score}</span></li>
          <li className="italic">
            <a className="text-white-90 hover:no-underline underline" href={`https://www.google.com/maps/search/?api=1&query=${selectedRestaurant.location[1]},${selectedRestaurant.location[0]}`} target="_blank" rel="noopener noreferrer">
              כתובת: {selectedRestaurant?.address}
            </a>
          </li>
          <li>
            <span>תיאור: </span>
            {selectedRestaurant?.description}
            {selectedRestaurant?.short_description}
            <br />
          </li>
          <ResurantTags tags={selectedRestaurant?.tags} />
        </ul>
      </div>
      {selectedRestaurant?.photo.image && (
        <img className="w-full object-cover" src={selectedRestaurant?.photo?.image} alt={selectedRestaurant?.title} />
      )}
    </section>


  );
};

export default connect()(ChosenRestaurant);

const removeDuplicates = (arr: string[]) => {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}
const ResurantTags = ({ tags }: { tags: string[] }) => {
  if (!tags || tags.length === 0) return null;
  let tagToRenader = tags.map((tag) => {
    switch (tag) {
      case 'kosher': return 'כשר';
      case 'sandwichesWraps': return 'סנדובייץ';
      case 'sandwich': return 'סנדובייץ';
      case 'street food': return 'אוכל רחוב';
      case 'salads': return 'סלטים';
      case 'meatGrill': return 'גריל';
      case 'bbq': return 'גריל';
      case 'grill': return 'גריל';
      case 'fish': return 'דגים';
      case 'café': return 'קפה';
      case 'cafe': return 'קפה';
      case 'coffeeHouse': return 'קפה';
      case 'breakfast': return 'ארוחת בוקר';
      case 'new': return 'חדש';
      case 'homeMade': return 'אוכל ביתי';
      case 'asianFusion': return 'אסייאתי';
      case 'asian': return 'אסייאתי';
      case 'japaneseSushi': return 'אסייאתי';
      case 'mediterranean': return 'ים תיכוני';
      case 'glutenFree': return 'ללא גלוטן';
      case 'gluten free': return 'ללא גלוטן';
      case 'burgers': return 'המבורגר';
      case 'pizza': return 'פיצה';
      case 'pasta': return 'פסטה';
      case 'patisserie': return 'איטלקי';
      case 'seafood': return 'מאכלי ים';
      case 'convenienceStore': return 'חנות נוחות';
      case 'dessert': return 'קינוחים';
      case 'SmoothiesAndShakes': return 'שייקים';
    }

    return tag
  });
  tagToRenader = removeDuplicates(tagToRenader);
  return (
    <li className="flex flex-wrap">
            <span>סגנון התפריט:&nbsp;</span>
      {tagToRenader.map((tag:string, indx:number) => (
        <span key={tag}>{indx ? ', ' : ''}{tag}</span>
      ))}
    </li>
  );
}