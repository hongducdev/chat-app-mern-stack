import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const useSignUp = () => {
  const [isLoading, setIsLoading] = useState(false);

  const signup = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputErrors({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
    });

    if (!success) return;

    setIsLoading(true);
    try {
      const response = await axios.post("/api/auth/signup", {
        fullName,
        username,
        password,
        confirmPassword,
        gender,
      });

      toast.success("Account created successfully");
      if (response.data.error) {
        toast.error(response.data.error);
        throw new Error(response.data.error);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return { isLoading, signup };
};

export default useSignUp;

const handleInputErrors = ({
  fullName,
  username,
  password,
  confirmPassword,
  gender,
}) => {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("All fields are required");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters long");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }

  return true;
};
