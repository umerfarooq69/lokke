import Heading from '../../../ui/heading';
import LabelsFilter from '../../../ui/label-search-filter';

import MapMarker from './map-marker-bars';

const TopProperties = () =>
  <div>
    <div className="relative mb-[32px]">
      <Heading heading="Top Properties" text="Total 315 properies" />

      <div className="absolute right-0 top-[10px]">
        <MapMarker />
      </div>
    </div>

    <LabelsFilter />
  </div>;

export default TopProperties;
