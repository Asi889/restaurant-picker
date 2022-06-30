// import FilterByFilters from "./FilterByFilters";
// import FilterByLocation from './'

// import FilterByFilters from "../filters/FilterByFilters";
import RedFilterByFilters from "./RedFilterByFilters";
import RedFilterByLocation from "./RedFilterByLocation";


const RedFiltersContainer = () => {
  return (
    <div className="space-y-4 absolute right-[74px] bottom-[32px]">
      <RedFilterByLocation />
      <RedFilterByFilters  />
    </div>
  );
};

export default RedFiltersContainer;
