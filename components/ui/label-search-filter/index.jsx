import FilterLabels from './filter-labels';
import SearchInput from './search-input';

const labels = ['New York', 'For Buy', 'Duplex', '$250k-500K', 'Last 3 Weeks', 'Apartments'];

const LabelsFilter = () =>
  <div className="flex justify-between">
    <div className="flex gap-2 flex-wrap">
      {labels.map((item) => <FilterLabels item={item} key={item} />)}
    </div>

    <div className="w-[276px] ">
      <SearchInput />
    </div>
  </div>;

export default LabelsFilter;
