import Heading from '../../../ui/heading';
import LabelsFilter from '../../../ui/label-search-filter';

import MapMarker from './map-marker-bars';

const PeopleList = () =>
  <div>
    <div className="relative mb-[32px]">
      <Heading heading="Peoples" text="Total 315 peoples" />

      <div className="absolute right-0 top-[10px]">
        <MapMarker />
      </div>
    </div>

    <LabelsFilter />
  </div>;

export default PeopleList;
