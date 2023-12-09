import { useState } from "react";
import Image from "next/image";

import Collapse from "../collapse";
import ToggleButton from "../toggle";
import { minusCloseIcon, plusOpenIcon } from "../../../static/import-images";

import Head from "./head";
import List from "./list";

const CollaseHeading = ({ label, initValue }) => {
  const [open, setOpen] = useState(initValue);

  return (
    <button className="flex text-left justify-between w-full" onClick={() => setOpen(!open)} type="button">
      <span className=" text-text-primary font-[500] mb-4">{label}</span>

      <span className="relative -top-3 h-[20px] w-[20px]">
        <Image alt="img" fill sizes="100" src={open ? minusCloseIcon : plusOpenIcon} />
      </span>
    </button>
  )
};


const PropertyPrefrences = () =>
  <div className="p-6">
    <div className="mb-8">
      <Head />
    </div>

    <div className="grid gap-8">
      <Collapse className="mt-6" initValue label={<CollaseHeading initValue label="Home Type" />}>
        <List />
      </Collapse>

      <Collapse className="mt-6" label={<CollaseHeading label="Beds" />}>
        <List />
      </Collapse>

      <Collapse className="mt-6" label={<CollaseHeading label="Baths" />}>
        <List />
      </Collapse>
    </div>

    <div className="flex justify-between mt-5 mb-10">
      <p className=" text-text-secondary text-[12px] relative top-1 ml-2">{'Must Hava Garage'}</p>
      <div><ToggleButton /></div>
    </div>

    <div className="grid gap-8">
      <Collapse className="mt-6" initValue label={<CollaseHeading initValue label="Status" />}>
        <List />
      </Collapse>

      <Collapse className="mt-6" label={<CollaseHeading label="Property Details" />}>
        <List />
      </Collapse>
    </div>
  </div>;

export default PropertyPrefrences;
