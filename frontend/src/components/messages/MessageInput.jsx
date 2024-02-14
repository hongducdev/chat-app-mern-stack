import { RiSendPlaneFill } from "react-icons/ri";

const MessageInput = () => {
  return (
    <form className="px-4 my-3 flex items-center gap-3">
      <input
        type="text"
        className="input input-bordered rounded-full flex-1 bg-ctp-mantle"
        placeholder="Type a message..."
      />
      <button className="h-12 w-12 rounded-full bg-gradient-to-r from-ctp-pink to-ctp-mauve text-ctp-base flex items-center justify-center">
        <RiSendPlaneFill className="w-6 h-6" />
      </button>
    </form>
  );
};

export default MessageInput;
