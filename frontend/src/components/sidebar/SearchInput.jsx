import { RiSearch2Line } from "react-icons/ri";
const SearchInput = () => {
  return (
    <form className="flex items-center gap-3">
      <input
        type="text"
        placeholder="Search for a user"
        className="input input-bordered rounded-full bg-ctp-mantle"
      />
      <button className="h-12 w-12 rounded-full bg-gradient-to-r from-ctp-pink to-ctp-mauve text-ctp-base flex items-center justify-center">
        <RiSearch2Line className="w-6 h-6" />
      </button>
    </form>
  );
};

export default SearchInput;
