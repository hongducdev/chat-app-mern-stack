import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] overflow-hidden rounded-lg shadow-md bg-gradient-to-br from-ctp-mantle to-ctp-crust outline outline-ctp-pink">
      <Sidebar />
    </div>
  );
};

export default Home;
