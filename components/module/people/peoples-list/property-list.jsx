import { useState } from 'react';

import PeopleTile from '../../../ui/people-tile';
import { peopleList } from '../../../../static/static-strings';
import PeopleDetails from '../people-details';
import DefaultModal from '../../../elements/modal';

const PropertyList = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="grid grid-cols-3 gap-6">
      {
        peopleList.map((item) =>
          <div key={item}>
            <PeopleTile data={item} setOpen={setOpen} />
          </div>)
      }

      <DefaultModal open={open} size="max-w-[1156px]" toggle={setOpen}>
        <PeopleDetails />
      </DefaultModal>
    </div>
  );
};

export default PropertyList;
