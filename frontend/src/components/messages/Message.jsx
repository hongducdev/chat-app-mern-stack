import propTypes from "prop-types";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../store/useConversation";
import { extractTime } from "../../utils/extractTime";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();

  const fromMe = message.senderId === authUser._id;
  const chatClass = fromMe ? "chat-end" : "chat-start";
  const chatBubbleClass = fromMe ? "bg-ctp-pink text-ctp-base" : "";
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;

  return (
    <div className={`chat ${chatClass}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Profile" src={profilePic} />
        </div>
      </div>
      <div className={`chat-bubble ${chatBubbleClass}`}>{message.message}</div>
      <div className="chat-footer opacity-50">
        {extractTime(message.createdAt)}
      </div>
    </div>
  );
};

export default Message;

Message.propTypes = {
  message: propTypes.object.isRequired,
};
