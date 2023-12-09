import { falgOne, falgTHree, falgTwo, markerNavIcon, peopleImg1, peopleImg2, peopleImg3, peopleImg4, peopleImg5, peopleImg6, propertyImg1, propertyImg2, propertyImg3, propertyImg4, propertyImg5, propertyImg6 } from './import-images';

const propertyList = [
  {
    baths: '4',
    bed: '3',
    img: propertyImg1,
    label: 'Riche Luxury Mansion',
    location: 'St.Constitution Drive, West',
    price: '$50,500',
    size: '6x8 m²',
  },
  {
    baths: '4',
    bed: '3',
    img: propertyImg2,
    label: 'Riche Luxury Mansion',
    location: 'St.Constitution Drive, West',
    price: '$50,500',
    size: '6x8 m²',
  },
  {
    baths: '4',
    bed: '3',
    img: propertyImg3,
    label: 'Riche Luxury Mansion',
    location: 'St.Constitution Drive, West',
    price: '$50,500',
    size: '6x8 m²',
  },
  {
    baths: '4',
    bed: '3',
    img: propertyImg4,
    label: 'Riche Luxury Mansion',
    location: 'St.Constitution Drive, West',
    price: '$50,500',
    size: '6x8 m²',
  },
  {
    baths: '4',
    bed: '3',
    img: propertyImg5,
    label: 'Riche Luxury Mansion',
    location: 'St.Constitution Drive, West',
    price: '$50,500',
    size: '6x8 m²',
  },
  {
    baths: '4',
    bed: '3',
    img: propertyImg6,
    label: 'Riche Luxury Mansion',
    location: 'St.Constitution Drive, West',
    price: '$50,500',
    size: '6x8 m²',
  },
];

const peopleList = [
  {
    date: '2023',
    img: peopleImg1,
    label: 'Demario Waters',
    license: '#0125465',
  },
  {
    date: '2023',
    img: peopleImg2,
    label: 'Easter Becker',
    license: '#0125465',
  },
  {
    date: '2023',
    img: peopleImg3,
    label: 'Rhoda Ziemann',
    license: '#0125465',
  },
  {
    date: '2023',
    img: peopleImg4,
    label: 'Randall Hettinger',
    license: '#0125465',
  },
  {
    date: '2023',
    img: peopleImg5,
    label: 'Angela Lockman',
    license: '#0125465',
  },
  {
    date: '2023',
    img: peopleImg6,
    label: 'Declan Streich',
    license: '#0125465',
  },
];

const detailsLabel = ['Staging', 'Photography', 'Marketing', 'Open House', 'Negotiating'];

const commission = ['Seller 2.5 ; Seller Pays', 'Buyer 25% ; Seller Pays Or Buyer Pays', 'Negotiable'];

const flagData = [
  {
    icon: falgOne,
    label: 'English',
  },
  {
    icon: falgTwo,
    label: 'Chines',
  },
  {
    icon: falgTHree,
    label: 'Spanish',
  },
];

const locations = [
  {
    icon: markerNavIcon,
    label: 'San Francisco',
  },
  {
    icon: markerNavIcon,
    label: 'Castro',
  },
  {
    icon: markerNavIcon,
    label: 'Noe Valley',
  },
  {
    icon: markerNavIcon,
    label: 'Barkelley',
  },
  {
    icon: markerNavIcon,
    label: 'Sacremento',
  },
  {
    icon: markerNavIcon,
    label: 'Oakland',
  },
  {
    icon: markerNavIcon,
    label: 'El Ceritto',
  },
  {
    icon: markerNavIcon,
    label: 'Albany',
  },
];

const defaultSplideIcon = {
  arrow: 'splide__arrow splide--arrow__custom',
  next: 'splide__arrow--next next--icon',
  prev: 'splide__arrow--prev prev--icon',
};

const appliances = ['Dishwasher', 'Drayer', 'Refrigerator', 'Stove/Range', 'Washer'];

const flooring = ['Hardwood', 'Vinyl', 'Carpet'];

const bathroom = ['1 Full bath', '1 Half bath', '2 Baths'];

const heating = ['Cooling available', 'Water Heater'];

const Fireplace = ['Has Fireplace', 'Using Gas Only', '1 Fireplace'];

const Interior = ['Hardwood', 'Wall to wall carpet', 'Double Pane/Strorm Window', 'Dining Room', 'Fireplace'];

export {
  propertyList,
  peopleList,
  detailsLabel,
  flagData,
  locations,
  commission,
  defaultSplideIcon,
  appliances,
  flooring,
  bathroom,
  heating,
  Fireplace,
  Interior,
};
