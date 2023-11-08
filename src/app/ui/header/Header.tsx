import Logo from "./Logo";
import Profile from "./Profile";
import ProfileMenu from "./ProfileMenu";

const Header = () => {
  return (
    <div className="flex justify-between items-center py-6 px-10 border-b-2 border-gray-700">
      <Logo />
      <Profile>
        <ProfileMenu />
      </Profile>
    </div>
  );
};
export default Header;
