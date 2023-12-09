import HorizontalTile from '../landing-page-card-tiles/horizontal-tile';
import LandscapeTile from '../landing-page-card-tiles/landscape-tile';

const tiles = [
  {
    class: 'home-car-bg-1 ',
    label: 'Buying',
    link: '/home',
  },
  {
    class: 'home-car-bg-2 ',
    label: 'Selling',
    link: '/home',
  },
  {
    class: 'home-car-bg-3 ',
    label: 'People',
    link: '/people',
  },
];

const CardSide = () =>
  <div className="grid gap-5">
    <HorizontalTile />

    <div className="grid grid-cols-3 gap-5">
      {tiles.map((item) => <LandscapeTile item={item} key={item.label} />)}
    </div>
  </div>;

export default CardSide;
