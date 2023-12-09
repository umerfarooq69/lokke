import { useState } from 'react';

import DefaultModal from '../../../elements/modal';

import ThreeD from './3d';
import BasicDetails from './basic-details';
import Collapse from './collapse';
import Facts from './facts';
import HomeDetails from './home-details';
import Nearby from './near-by';
import Neighborhood from './neighborhood';
import PropertyHistory from './property-history';
import SimilarListing from './similar-listing';
import SliderSection from './slider-section';
import Gallery from './popups/gallery';
import StreetView from './popups/street-view';
import ThreeDView from './popups/3d';

const TopDetailsSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="pb-[68px]">
      <div>
        <SliderSection setOpen={setOpen} />
      </div>

      <div className="mt-6">
        <BasicDetails />
      </div>

      <div className="mt-[50px]">
        <ThreeD setOpen={setOpen} />
      </div>

      <div className="mt-[50px]">
        <h4 className="text-[20px] text-text-primary font-medium mb-6">{'Home Facts'}</h4>
        <Facts />
      </div>

      <div className="mt-[50px]">
        <Collapse />
      </div>

      <div className="mt-[50px]">
        <h4 className="text-[20px] text-text-primary font-medium mb-6">{'Home Details'}</h4>
        <HomeDetails />
      </div>

      <div className="mt-[50px]">
        <h4 className="text-[20px] text-text-primary font-medium mb-6">{'Schools nearby'}</h4>
        <Nearby />
      </div>

      <div className="mt-[50px]">
        <h4 className="text-[20px] text-text-primary font-medium mb-6">{'Neighborhood'}</h4>
        <Neighborhood />
      </div>

      <div className="mt-[50px]">
        <h4 className="text-[20px] text-text-primary font-medium mb-6">{'Property history'}</h4>
        <PropertyHistory />
      </div>

      <div className="mt-[50px]">
        <h4 className="text-[20px] text-text-primary font-medium mb-6">{'Similar homes for sale'}</h4>
        <SimilarListing />
      </div>

      <div className="mt-[50px]">
        <h4 className="text-[20px] text-text-primary font-medium mb-6">{'Recently sold nearby'}</h4>
        <SimilarListing />
      </div>

      <DefaultModal open={open === 'photos'} size="min-w-[776px]" toggle={setOpen}>
        <Gallery />
      </DefaultModal>

      <DefaultModal open={open === 'street-view'} size="min-w-[776px]" toggle={setOpen}>
        <StreetView />
      </DefaultModal>

      <DefaultModal open={open === '3d-view'} size="min-w-[776px]" toggle={setOpen}>
        <ThreeDView />
      </DefaultModal>
    </div>
  );
};

export default TopDetailsSection;
