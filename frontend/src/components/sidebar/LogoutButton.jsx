import { RiLogoutBoxLine } from "react-icons/ri";

const LogoutButton = () => {
  return (
    <button className="mt-auto flex items-center justify-center gap-2 bg-ctp-red px-4 py-1 rounded-md text-ctp-base">
      <RiLogoutBoxLine className="h-6 w-6" />
      <span className="">Log out</span>
    </button>
  );
};

export default LogoutButton;
