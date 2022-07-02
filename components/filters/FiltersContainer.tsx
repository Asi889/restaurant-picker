import FilterByFilters from "./FilterByFilters";
import FilterByLocation from "./FilterByLocation";


const FiltersContainer = (props: any) => {
  const {setIsOpen, isOpen}= props
  return (
    <div className="space-y-4  mt-10 ">
      <FilterByLocation />
      <FilterByFilters setIsOpen={setIsOpen} isOpen={isOpen} />
    </div>
  );
};

export default FiltersContainer;
