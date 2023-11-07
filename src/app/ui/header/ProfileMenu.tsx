import ProfileMenuItem from "./ProfileMenuItem";

const ProfileMenu = () => {
  return (
    <ul className="absolute right-5 top-5 z-10 bg-gray-800 p-2 border-2 border-gray-700 rounded-md text-left text-xs">
      <ProfileMenuItem type="signIn" />
      <ProfileMenuItem type="signUp" />
    </ul>
  );
};
export default ProfileMenu;
