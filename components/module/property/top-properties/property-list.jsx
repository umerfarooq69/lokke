import { propertyList } from '../../../../static/static-strings';
import PropertyTile from '../../../ui/property-tile';

const PropertyList = () =>
  <div className="grid grid-cols-3 gap-6">
    {
      propertyList.map((item) =>
        <div key={item}>
          <PropertyTile data={item} />
        </div>)
    }
  </div>;

export default PropertyList;
