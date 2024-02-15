import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogOut = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const logOut = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post("/api/auth/logout");
      if (response.data.error) {
        toast.error(response.data.error);
        throw new Error(response.data.error);
      }
      toast.success(response.data.message);
      setAuthUser(null);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, logOut };
};

export default useLogOut;
