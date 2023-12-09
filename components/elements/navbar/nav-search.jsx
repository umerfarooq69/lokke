import SearchButtons from './search-buttons';
import SearchInput from './search-input';

const NavSearch = () =>
  <div className="p-1 border border-[#E6EBFC] bg-background-tertiary rounded-[64px] flex gap-[48px]">
    <SearchButtons />
    <div className="w-[276px]">
      <SearchInput />
    </div>
  </div>;

export default NavSearch;
