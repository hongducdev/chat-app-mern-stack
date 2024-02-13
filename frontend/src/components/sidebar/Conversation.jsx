const Conversation = () => {
  return (
    <section className="group">
      <div className="flex items-center gap-4 group-hover:bg-ctp-pink rounded p-2 py-1 cursor-pointer">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              alt="avatar_user"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <span className="font-semibold text-xl group-hover:text-ctp-mantle">
            Nguyen Hong Duc
          </span>
        </div>
      </div>
      <div className="divider my-0 py-0 h-1"></div>
    </section>
  );
};

export default Conversation;
