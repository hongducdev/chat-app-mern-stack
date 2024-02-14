import MessageInput from "./MessageInput";
import Messages from "./Messages";

const MessageContainer = () => {
  const noChat = true;
  return (
    <div className="md:min-w-[35vw] flex flex-col">
      {noChat ? (
        <>
          <div className="flex-1 flex items-center justify-center">
            <div className="text-ctp-surface0 text-3xl font-semibold">
              No chat selected
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="bg-ctp-pink p-4 text-xl rounded-bl-lg mb-2">
            <span className="text-ctp-crust font-semibold">To: </span>
            <span className="text-ctp-surface0">Nguyen Hong Duc</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;
