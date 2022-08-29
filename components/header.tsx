import { useSelector } from "react-redux";
import ButtonLogout from "./ui/buttonLogout";

const Header = () => {
  const user = useSelector(
    (state: { auth: { user: { name: string } } }) => state.auth.user.name
  );

  return (
    <header
      className="grid grid-cols-2 bg-gray-800 h-12 cursor-default
      items-center align-baseline"
    >
      <div className="flex gap-1 ml-4 items-start align-baseline select-none">
        <h5 className="text-white font-extrabold">User:</h5>

        <h5 className="text-white font-extralight italic ">{user}</h5>
      </div>
      <div className="flex justify-end mr-4 select-none">
        <ButtonLogout />
      </div>
    </header>
  );
};

export default Header;
