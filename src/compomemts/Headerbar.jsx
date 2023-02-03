import {
  AxonsLogo,
  MenuIcon,
  SearchIcon,
  BellNotiIcon,
  AvatarIcon,
  ArrowDownIcon,
} from "../assets/Icon/Main.js";

const Headerbar = ({ handleOpenSidebar }) => {
  return (
    <div className="header-nav-bar">
      <div className="py-3 px-8 flex justify-between border-b-1 border-gray-100">
        <div className="flex space-x-4 items-center">
          <div onClick={handleOpenSidebar}>
            <MenuIcon size={20} color="white" />
          </div>
          <AxonsLogo size={40} color="white" />
        </div>

        <div className="flex flex-row items-center divide-x divide-border-gray">
          <div className="flex space-x-4 items-center pr-6">
            <SearchIcon size={20} color="white" />
            <BellNotiIcon size={20} color="white" />
          </div>

          <div className="flex space-x-2 items-center pl-6">
            <AvatarIcon size={40} />
            <p className="text-white">ArtTemplate</p>
            <ArrowDownIcon size={24} color="white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headerbar;
