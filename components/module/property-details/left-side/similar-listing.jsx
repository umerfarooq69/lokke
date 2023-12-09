import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';

import { defaultSplideIcon, propertyList } from '../../../../static/static-strings';
import PropertyTile from '../../../ui/property-tile';

const options = {
  arrows: true,
  classes: {
    ...defaultSplideIcon,
  },
  gap: '24px',
  pagination: false,
  perPage: 2,
  rewind: true,
  width: '100%',
};

const SimilarListing = () =>
  <div>
    <Splide aria-label="My Favorite Images" options={options}>
      {
        propertyList.map((item) =>
          <SplideSlide key={item}>
            <div>
              <PropertyTile data={item} />
            </div>
          </SplideSlide>)

      }
    </Splide>
  </div>;

export default SimilarListing;
