import FilterByFilters from "./FilterByFilters";
import FilterByLocation from "./FilterByLocation";


const FiltersContainer = () => {
  return (
    <div className="space-y-4  mt-10 ">
      <FilterByLocation />
      <FilterByFilters  />
    </div>
  );
};

export default FiltersContainer;
